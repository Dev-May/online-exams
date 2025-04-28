import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { ChangePasswordFields } from "@/lib/schemas/auth.schema";
import { changePasswordAction } from "../_actions/change-password.action";

export default function useChangePassword() {
  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (changePasswordFields: ChangePasswordFields) => {
      const payload = await changePasswordAction(changePasswordFields);

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
    onSuccess: (data) => {
      toast.success("Success! Your password has been changed.");
    },
    onError: (error) => {
      toast.error("Something went wrong! Please try again.");
    },
  });

  return { isPending, error, changePassword: mutate };
}
