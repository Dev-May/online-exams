import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { editProfileAction } from "../_actions/edit-profile.action";
import { EditProfileFields } from "@/lib/schemas/auth.schema";

export default function useEditProfile() {
  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (editProfileFields: EditProfileFields) => {
      const payload = await editProfileAction(editProfileFields);

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
    onSuccess: (data) => {
      toast.success("Success! Your profile info has been updated.");
    },
    onError: (error) => {
      toast.error("Something went wrong! Please try again.");
    },
  });

  return { isPending, error, editProfile: mutate };
}
