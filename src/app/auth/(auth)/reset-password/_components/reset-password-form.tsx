"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ResetPasswordFields,
  useResetPasswordSchema,
} from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useState } from "react";
import useResetPassword from "../_hooks/use-reset-password";
import PasswordToggleButton from "@/app/auth/_components/password-toggle-button";

export default function ResetPasswordForm() {
  // Password Toggle
  const [showPassword, setShowPassword] = useState(false);

  // Hooks
  const resetPasswordSchema = useResetPasswordSchema();
  const { error, isPending, resetPassword } = useResetPassword();

  // Form
  const form = useForm<ResetPasswordFields>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      email: "",
      newPassword: "",
    },
  });

  // Functions
  const onSubmit: SubmitHandler<ResetPasswordFields> = (values) => {
    resetPassword(values);
  };

  return (
    <>
      <Card className="w-full max-w-md">
        {/* Header */}
        <CardHeader>
          {/* Title */}
          <CardTitle className="text-2xl">Set a Password</CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel className="sr-only">Email: </FormLabel>

                    {/* Field */}
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter Email"
                        autoComplete="email"
                        className={`h-14 ${
                          form.formState.errors.email
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* New Password */}
              <FormField
                control={form.control}
                name="newPassword"
                render={({ field }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel className="sr-only">New Password:</FormLabel>

                    {/* Field */}
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="New Password"
                          autoComplete="new-password"
                          className={`h-14 pr-10 ${
                            form.formState.errors.newPassword
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                          {...field}
                        />
                      </FormControl>

                      {/* Password toggle button */}
                      <PasswordToggleButton
                        show={showPassword}
                        onClick={() => setShowPassword((prev) => !prev)}
                      />
                    </div>
                  </FormItem>
                )}
              />

              {/* Error */}
              {error && (
                <p className="text-sm text-red-600 italic my-4">
                  {error.message}
                </p>
              )}

              {/* Submit */}
              <Button
                type="submit"
                className="btn-blue"
                disabled={
                  isPending ||
                  (form.formState.isSubmitted && !form.formState.isValid)
                }
              >
                Reset Password
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
