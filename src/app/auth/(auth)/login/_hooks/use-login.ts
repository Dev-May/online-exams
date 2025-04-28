import { LoginFields } from "@/lib/schemas/auth.schema";
import { AuthenticationError } from "@/lib/utils/app-errors";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function useLogin() {
  // Navigation
  const searchParams = useSearchParams();

  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (loginField: LoginFields) => {
      const response = await signIn("credentials", {
        email: loginField.email,
        password: loginField.password,
        redirect: false,
        callbackUrl: decodeURIComponent(
          searchParams.get("callbackUrl") || "/student"
        ),
      });

      if (response?.error) throw new AuthenticationError(response.error);

      return response;
    },
    onSuccess: (data) => {
      toast.success("Logged in successfully!");

      // Redirect to the callback URL after a successful login
      setTimeout(() => {
        window.location.href = data?.url || "/student";
      }, 1000);
    },
    onError: (error) => {
      toast.error("Log in failed! Please try again.");
    },
  });

  return { isPending, error, login: mutate };
}
