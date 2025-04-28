import { ResetPasswordFields } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { resetPasswordAction } from "../_actions/reset-password.action";

export default function useResetPassword() {
  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (resetPasswordFields: ResetPasswordFields) => {
      const payload = await resetPasswordAction(resetPasswordFields);

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
    onSuccess: (data) => {
      toast.success("Success! Your password has been reset. Please log in.");

      // Redirect to the login page after a successful password reset
      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 1000);
    },
    onError: (error) => {
      toast.error(
        "There is no account with this email address! Please try again."
      );
    },
  });

  return { isPending, error, resetPassword: mutate };
}
