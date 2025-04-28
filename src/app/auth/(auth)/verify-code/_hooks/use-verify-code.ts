import { VerifyCodeFields } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { verifyCodeAction } from "../_actions/verify-code.action";

export default function useVerifyCode() {
  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (verifyCodefields: VerifyCodeFields) => {
      const payload = await verifyCodeAction(verifyCodefields);

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
    onSuccess: (data) => {
      toast.success("Verified! Please reset your password");

      // Redirect to the reset-password page after a successful code verification
      setTimeout(() => {
        window.location.href = "/auth/reset-password";
      }, 1000);
    },
    onError: (error) => {
      toast.error("Reset code is invalid or has expired! Please try again.");
    },
  });

  return { isPending, error, verifyCode: mutate };
}
