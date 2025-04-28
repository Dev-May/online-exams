"use client";

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
  ChangePasswordFields,
  useChangePasswordSchema,
} from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import useChangePassword from "../_hooks/use-change-password";
import PasswordToggleButton from "@/app/auth/_components/password-toggle-button";

export default function ChangePasswordForm() {
  // Separate toggles for each password field
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  // Hooks
  const changePasswordSchema = useChangePasswordSchema();
  const { isPending, error, changePassword } = useChangePassword();

  // Form
  const form = useForm<ChangePasswordFields>({
    resolver: zodResolver(changePasswordSchema),
    defaultValues: {
      oldPassword: "",
      password: "",
      rePassword: "",
    },
  });

  // Submit function
  const onSubmit: SubmitHandler<ChangePasswordFields> = (values) => {
    changePassword(values);
  };

  return (
    <Form {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        {/* Old Password */}
        <FormField
          control={form.control}
          name="oldPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Old Password:</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showOldPassword ? "text" : "password"}
                    placeholder="Old Password"
                    className={`h-14 pr-10 ${
                      form.formState.errors.oldPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    {...field}
                  />
                </FormControl>

                {/* Old Password Toggle Button */}
                <PasswordToggleButton
                  show={showOldPassword}
                  onClick={() => setShowOldPassword((prev) => !prev)}
                />
              </div>
            </FormItem>
          )}
        />

        {/* New Password */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Password:</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    autoComplete="new-password"
                    className={`h-14 pr-10 ${
                      form.formState.errors.password
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    {...field}
                  />
                </FormControl>

                {/* New Password Toggle Button */}
                <PasswordToggleButton
                  show={showPassword}
                  onClick={() => setShowPassword((prev) => !prev)}
                />
              </div>
            </FormItem>
          )}
        />

        {/* Confirm Password */}
        <FormField
          control={form.control}
          name="rePassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="sr-only">Confirm Password:</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showRePassword ? "text" : "password"}
                    placeholder="Confirm Password"
                    className={`h-14 pr-10 ${
                      form.formState.errors.rePassword
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                    {...field}
                  />
                </FormControl>

                {/* Confirm Password Toggle Button */}
                <PasswordToggleButton
                  show={showRePassword}
                  onClick={() => setShowRePassword((prev) => !prev)}
                />
              </div>
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
          Reset Password
        </Button>
      </form>
    </Form>
  );
}
