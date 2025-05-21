import { JSON_HEADER } from "./lib/constants/api.constant";
import type { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { AuthenticationError } from "./lib/utils/app-errors";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/login",
  },
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const response = await fetch(`${process.env.API}/auth/signin`, {
          method: "POST",
          headers: {
            ...JSON_HEADER,
          },
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const payload: APIResponse<LoginResponse> = await response.json();

        if ("code" in payload) {
          throw new AuthenticationError(payload.message);
        }

        return {
          id: payload.user._id,
          user: payload.user,
          token: payload.token,
        };
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.token = user.token;
        token.user = user.user;
      }

      return token;
    },
    session: ({ session, token }) => {
      session.user = token.user;

      return session;
    },
  },
};
