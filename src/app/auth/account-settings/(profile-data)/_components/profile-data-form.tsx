"use client";

import { Input } from "@/components/ui/input";
import {
  ProfileDataFields,
  useProfileDataSchema,
} from "@/lib/schemas/auth.schema";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import useProfileData from "../_hooks/profile-data";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProfileDataForm() {
  // Hooks
  const profileDataSchema = useProfileDataSchema();

  // Form
  const form = useForm<ProfileDataFields>({
    resolver: zodResolver(profileDataSchema),
    defaultValues: {
      _id: "",
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  // Fetch profile data
  const { isLoading, error, data } = useProfileData();

  // Fill form when profile data is loaded
  useEffect(() => {
    if (data?.user) {
      form.reset({
        _id: data.user._id || "",
        username: data.user.username || "",
        firstName: data.user.firstName || "",
        lastName: data.user.lastName || "",
        email: data.user.email || "",
        phone: data.user.phone || "",
      });
    }
  }, [data, form]);

  // Functions
  const onSubmit: SubmitHandler<ProfileDataFields> = (values) => {
    void values;
  };

  return (
    <>
      <Form {...form}>
        <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          {/* User ID */}
          {isLoading ? (
            <Skeleton className="h-14 w-full rounded-md" />
          ) : (
            <FormField
              control={form.control}
              name="_id"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>User ID:</FormLabel>

                  {/* Field */}
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="User ID"
                      className={`h-14 ${
                        form.formState.errors._id
                          ? "border-red-500"
                          : "border-gray-300"
                      }`}
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          )}

          {/* Username */}
          {isLoading ? (
            <Skeleton className="h-14 w-full rounded-md" />
          ) : (
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Username:</FormLabel>

                  {/* Field */}
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="User Name"
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
          )}

          {/* First Name */}
          {isLoading ? (
            <Skeleton className="h-14 w-full rounded-md" />
          ) : (
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>First Name:</FormLabel>

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
          )}

          {/* Last Name */}
          {isLoading ? (
            <Skeleton className="h-14 w-full rounded-md" />
          ) : (
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Last Name:</FormLabel>

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
          )}

          {/* Email */}
          {isLoading ? (
            <Skeleton className="h-14 w-full rounded-md" />
          ) : (
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Email: </FormLabel>

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
          )}

          {/* Phone */}
          {isLoading ? (
            <Skeleton className="h-14 w-full rounded-md" />
          ) : (
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  {/* Label */}
                  <FormLabel>Phone:</FormLabel>

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
          )}

          {/* Error */}
          {error && (
            <p className="text-sm text-red-600 italic my-4">{error.message}</p>
          )}
        </form>
      </Form>
    </>
  );
}
