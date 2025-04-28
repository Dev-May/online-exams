import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { forgotPasswordAction } from "../_actions/forgot-password.action";
import { ForgotPasswordFields } from "@/lib/schemas/auth.schema";

export default function useForgotPassword() {
  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (forgotPasswordFields: ForgotPasswordFields) => {
      const payload = await forgotPasswordAction(forgotPasswordFields);

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
    onSuccess: (data) => {
      toast.success("OTP sent to your email!");

      // Redirect to the verify-code page after a successful recovery
      setTimeout(() => {
        window.location.href = "/auth/verify-code";
      }, 1000);
    },
    onError: (error) => {
      toast.error(
        "There is no account with this email address! Please try again."
      );
    },
  });

  return { isPending, error, forgotPassword: mutate };
}
