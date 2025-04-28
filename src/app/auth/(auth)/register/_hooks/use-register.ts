import { RegistrationFields } from "@/lib/schemas/auth.schema";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { registerAction } from "../_actions/register.action";

export default function useRegister() {
  // Mutation
  const { isPending, error, mutate } = useMutation({
    mutationFn: async (registerFields: RegistrationFields) => {
      const payload = await registerAction(registerFields);

      if ("code" in payload) throw new Error(payload.message);

      return payload;
    },
    onSuccess: (data) => {
      toast.success("Registered successfully!");

      // Redirect to the Login page after a successful Registeration
      setTimeout(() => {
        window.location.href = "/auth/login";
      }, 1000);
    },
    onError: (error) => {
      toast.error("Registration faild! Please try again.");
    },
  });

  return { isPending, error, register: mutate };
}
