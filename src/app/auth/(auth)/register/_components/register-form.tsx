"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  RegistrationFields,
  useRegisterSchema,
} from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useState } from "react";
import useRegister from "../_hooks/use-register";
import PasswordToggleButton from "@/app/auth/_components/password-toggle-button";

export default function RegisterForm() {
  // Navigation
  const router = useRouter();

  // State: Password Toggle
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  // Hooks
  const registerSchema = useRegisterSchema();
  const { isPending, register, error } = useRegister();

  // Form
  const form = useForm<RegistrationFields>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
  });

  // Functions
  const onSubmit: SubmitHandler<RegistrationFields> = (values) => {
    register(values);
  };

  return (
    <>
      <Card className="w-full max-w-md">
        {/* Header */}
        <CardHeader>
          {/* Title */}
          <CardTitle className="text-2xl">Sign up</CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              {/* Username */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel className="sr-only">Username:</FormLabel>

                    {/* Field */}
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="User Name"
                        autoComplete=""
                        className={`h-14 ${
                          form.formState.errors.username
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              {/* First Name */}
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel className="sr-only">First Name:</FormLabel>

                    {/* Field */}
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="First Name"
                        autoComplete="given-name"
                        className={`h-14 ${
                          form.formState.errors.firstName
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

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

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel className="sr-only">Password:</FormLabel>

                    {/* Field */}
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          autoComplete="suggest-password"
                          className={`h-14 pr-10 ${
                            form.formState.errors.password
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

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="rePassword"
                render={({ field }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel className="sr-only">Confirm Password:</FormLabel>

                    {/* Field */}
                    <div className="relative">
                      <FormControl>
                        <Input
                          type={showPassword ? "text" : "password"}
                          placeholder="Confirm Password"
                          autoComplete=""
                          {...field}
                          className={`h-14 pr-10 ${
                            form.formState.errors.rePassword
                              ? "border-red-500"
                              : "border-gray-300"
                          }`}
                        />
                      </FormControl>

                      {/* Confirm password toggle button */}
                      <PasswordToggleButton
                        show={showRePassword}
                        onClick={() => setShowRePassword((prev) => !prev)}
                      />
                    </div>
                  </FormItem>
                )}
              />

              {/* Phone */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel className="sr-only">Phone:</FormLabel>

                    {/* Field */}
                    <FormControl>
                      <Input
                        type="tel"
                        {...field}
                        autoComplete="tel-national"
                        placeholder="Phone"
                        className={`h-14 ${
                          form.formState.errors.phone
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <p className="text-muted-foreground text-center">
                Already have an account?{" "}
                <Button
                  variant={"link"}
                  className="p-0 h-auto text-brand"
                  onClick={() => router.push("/auth/login")}
                >
                  Login
                </Button>
              </p>

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
                Create account
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
