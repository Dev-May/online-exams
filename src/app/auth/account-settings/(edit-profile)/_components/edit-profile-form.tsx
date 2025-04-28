import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  EditProfileFields,
  useEditProfileSchema,
} from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useEditProfile from "../_hooks/use-edit-profile";

export default function EditProfileForm() {
  // Hooks
  const editProfileSchema = useEditProfileSchema();
  const { isPending, error, editProfile } = useEditProfile();

  // Form
  const form = useForm<EditProfileFields>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      lastName: "",
    },
  });

  // Submit function
  const onSubmit: SubmitHandler<EditProfileFields> = (values) => {
    editProfile(values);
  };
  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Last Name */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              {/* Label */}
              <FormLabel className="sr-only">Last Name:</FormLabel>

              {/* Field */}
              <FormControl>
                <Input
                  type="text"
                  placeholder="Last Name"
                  autoComplete="family-name"
                  className={`h-14 ${
                    form.formState.errors.lastName
                      ? "border-red-500"
                      : "border-gray-300"
                  }`}
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {/* Error */}
        {error && (
          <p className="text-sm text-red-600 italic my-4">{error.message}</p>
        )}

        {/* Submit */}
        <Button
          type="submit"
          className="btn-blue"
          disabled={
            isPending || (form.formState.isSubmitted && !form.formState.isValid)
          }
        >
          Edit Profile
        </Button>
      </form>
    </Form>
  );
}
