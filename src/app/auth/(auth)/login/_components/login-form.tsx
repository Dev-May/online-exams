"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { LoginFields, useLoginSchema } from "@/lib/schemas/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import useLogin from "../_hooks/use-login";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useState } from "react";
import PasswordToggleButton from "@/app/auth/_components/password-toggle-button";

export default function LoginForm() {
  // State: Password Toggle
  const [showPassword, setShowPassword] = useState(false);

  // Navigation
  const router = useRouter();

  // Hooks
  const loginSchema = useLoginSchema();

  // Mutation
  const { isPending, error, login } = useLogin();

  // Form
  const form = useForm<LoginFields>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // Functions
  const onSubmit: SubmitHandler<LoginFields> = (values) => {
    login(values);
  };

  return (
    <Card className="w-full max-w-md">
      {/* Header */}
      <CardHeader>
        {/* Title */}
        <CardTitle className="text-2xl">Sign in</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent>
        <Form {...form}>
          <form
            className="flex flex-col space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
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
                  <FormLabel className="sr-only">Password</FormLabel>

                  {/* Field */}
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        autoComplete="current-password"
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

            <Button
              type="button"
              variant={"link"}
              className="text-brand p-0 h-auto ml-auto"
              onClick={(e) => {
                router.push("/auth/forgot-password");
              }}
            >
              Recover Password?
            </Button>

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
              Sign in
            </Button>
          </form>
        </Form>
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col ">
        <p className="text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Button
            variant={"link"}
            className="p-0 h-auto"
            onClick={() => router.push("/auth/register")}
          >
            Create account
          </Button>
        </p>
      </CardFooter>
    </Card>
  );
}
