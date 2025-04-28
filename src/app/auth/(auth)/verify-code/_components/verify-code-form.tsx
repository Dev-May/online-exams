"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  useVerifyCodeSchema,
  VerifyCodeFields,
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
import useVerifyCode from "../_hooks/use-verify-code";

export default function VerifyCodeForm() {
  // Navigation
  const router = useRouter();

  // Hooks
  const verifyCodeSchema = useVerifyCodeSchema();
  const { error, isPending, verifyCode } = useVerifyCode();

  // Form
  const form = useForm<VerifyCodeFields>({
    resolver: zodResolver(verifyCodeSchema),
    defaultValues: {
      resetCode: "",
    },
  });

  // Functions
  const onSubmit: SubmitHandler<VerifyCodeFields> = (values) => {
    verifyCode(values);
  };

  return (
    <>
      <Card className="w-full max-w-md">
        {/* Header */}
        <CardHeader>
          {/* Title */}
          <CardTitle className="text-2xl">Verify code</CardTitle>
        </CardHeader>

        {/* Content */}
        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              {/* Verify Code */}
              <FormField
                control={form.control}
                name="resetCode"
                render={({ field }) => (
                  <FormItem>
                    {/* Label */}
                    <FormLabel className="sr-only">Verify Code:</FormLabel>

                    {/* Field */}
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="Enter Code"
                        className={`h-14 ${
                          form.formState.errors.resetCode
                            ? "border-red-500"
                            : "border-gray-300"
                        }`}
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <p className="text-muted-foreground text-right">
                Didn't receive a code?{" "}
                <Button
                  type="button"
                  variant={"link"}
                  className="p-0 h-auto text-brand"
                  onClick={() => router.push("/auth/forgot-password")}
                >
                  Resend
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
                Verify Reset Code
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
