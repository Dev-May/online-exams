"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  ForgotPasswordFields,
  useForgotPasswordSchema,
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
import useForgotPassword from "../_hooks/use-forgot-password";

export default function ForgotPasswordForm() {
  // Navigation
  const router = useRouter();

  // Hooks
  const forgotPasswordSchema = useForgotPasswordSchema();
  const { error, isPending, forgotPassword } = useForgotPassword();

  // Form
  const form = useForm<ForgotPasswordFields>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  // Functions
  const onSubmit: SubmitHandler<ForgotPasswordFields> = (values) => {
    forgotPassword(values);
  };

  return (
    <>
      <Card className="w-full max-w-md">
        {/* Header */}
        <CardHeader>
          {/* Title */}
          <CardTitle className="text-2xl">Forgot your password?</CardTitle>
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

              <Button
                type="button"
                variant={"link"}
                className="text-brand p-0 h-auto ml-auto"
                onClick={() => router.push("/auth/forgot-password")}
              >
                Recover Password?
              </Button>

              {/* Submit */}
              <Button
                type="submit"
                className="btn-blue"
                disabled={
                  isPending ||
                  (form.formState.isSubmitted && !form.formState.isValid)
                }
              >
                Send Code
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
