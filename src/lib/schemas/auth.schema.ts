import { z } from "zod";

// Register schema
export const useRegisterSchema = () => {
  return z
    .object({
      username: z
        .string({ required_error: "username-required" })
        .min(1, "username-required"),
      firstName: z
        .string({ required_error: "firstname-required" })
        .min(1, "firstname-required"),
      lastName: z
        .string({ required_error: "lastname-required" })
        .min(1, "lastname-required"),
      email: z.string({ required_error: "email-required" }).email({
        message: "email-invalid",
      }),
      password: z.string({ required_error: "password-required" }).min(8, {
        message: "password-min",
      }),
      rePassword: z.string(),
      phone: z
        .string({ required_error: "phone-required" })
        .min(1, "phone-required"),
    })
    .refine((data) => data.password === data.rePassword, {
      message: "password-mismatch",
      path: ["rePassword"],
    });
};

export type RegistrationFields = z.infer<ReturnType<typeof useRegisterSchema>>;

// Login schema
export const useLoginSchema = () => {
  return z.object({
    email: z.string({ required_error: "email-required" }).email({
      message: "email-invalid",
    }),
    password: z
      .string({ required_error: "password-required" })
      .min(1, "password-required"),
  });
};

export type LoginFields = z.infer<ReturnType<typeof useLoginSchema>>;

// Forgot password schema
export const useForgotPasswordSchema = () => {
  return z.object({
    email: z.string({ required_error: "email-required" }).email({
      message: "email-invalid",
    }),
  });
};

export type ForgotPasswordFields = z.infer<
  ReturnType<typeof useForgotPasswordSchema>
>;

// Verify code schema
export const useVerifyCodeSchema = () => {
  return z.object({
    resetCode: z
      .string({ required_error: "code-required" })
      .min(6, "Code must be at least 6 characters"),
  });
};

export type VerifyCodeFields = z.infer<ReturnType<typeof useVerifyCodeSchema>>;

// Reset password schema
export const useResetPasswordSchema = () => {
  return z.object({
    email: z.string({ required_error: "email-required" }).email({
      message: "email-invalid",
    }),
    newPassword: z
      .string({ required_error: "password-required" })
      .min(1, "password-required"),
  });
};

export type ResetPasswordFields = z.infer<
  ReturnType<typeof useResetPasswordSchema>
>;

// Change password schema
export const useChangePasswordSchema = () => {
  return z.object({
    oldPassword: z
      .string({ required_error: "oldPassword-required" })
      .min(1, "password-required"),
    password: z
      .string({ required_error: "password-required" })
      .min(1, "password-required"),
    rePassword: z
      .string({ required_error: "rePassword-required" })
      .min(1, "password-required"),
  });
};

export type ChangePasswordFields = z.infer<
  ReturnType<typeof useChangePasswordSchema>
>;

// Edit profile schema
export const useEditProfileSchema = () => {
  return z.object({
    lastName: z
      .string({ required_error: "lastname-required" })
      .min(1, "lastname-required"),
  });
};

export type EditProfileFields = z.infer<
  ReturnType<typeof useEditProfileSchema>
>;

// Profile data schema for fetched API response
export const useProfileDataSchema = () => {
  return z.object({
    _id: z.string(),
    username: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
  });
};

export type ProfileDataFields = z.infer<
  ReturnType<typeof useProfileDataSchema>
>;
