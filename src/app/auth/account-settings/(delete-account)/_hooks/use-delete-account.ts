import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteAccountAction } from "../_actions/delete-account.action";
import { signOut } from "next-auth/react";

export default function useDeleteAccount() {
  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async () => {
      const payload = await deleteAccountAction();

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
    onSuccess: async (data) => {
      await signOut({ redirect: false });
      toast.success("Success! Your account has been deleted.");

      // Redirect to the register page after a successful delete account
      setTimeout(() => {
        window.location.href = "/auth/register";
      }, 1000);
    },
    onError: (error) => {
      toast.error("Something went wrong! Please try again.");
    },
  });

  return { isPending, error, deleteAccount: mutate };
}
