"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import useDeleteAccount from "../(delete-account)/_hooks/use-delete-account";
import ChangePasswordForm from "../(change-password)/_components/change-password-form";
import EditProfileForm from "../(edit-profile)/_components/edit-profile-form";
import ProfileDataForm from "../(profile-data)/_components/profile-data-form";

export default function AccountSettings() {
  // Hooks
  const { isPending, error, deleteAccount } = useDeleteAccount();

  return (
    <Tabs defaultValue="profileData" className="w-[600px] m-auto">
      <h2 className="text-2xl mb-6">Account Settings</h2>
      <TabsList className="mb-4">
        {/* Account Setting Tabs Trigger */}
        <TabsTrigger value="profileData">Profile Data</TabsTrigger>
        <TabsTrigger value="editProfile">Edit Profile</TabsTrigger>
        <TabsTrigger value="changePassword">Change Password</TabsTrigger>
        <TabsTrigger className="text-red-600" value="deleteAccount">
          Delete Account
        </TabsTrigger>
      </TabsList>

      {/* Profile Data */}
      <TabsContent value="profileData">
        <ProfileDataForm />
      </TabsContent>

      {/* Edit Profile */}
      <TabsContent value="editProfile">
        <EditProfileForm />
      </TabsContent>

      {/* Change Password */}
      <TabsContent value="changePassword">
        <ChangePasswordForm />
      </TabsContent>

      {/* Delete Account */}
      <TabsContent value="deleteAccount">
        {/* Error */}
        {error && (
          <p className="text-sm text-red-600 italic my-4">{error.message}</p>
        )}

        {/* Delete Button */}
        <Button
          onClick={() => deleteAccount()}
          type="button"
          className="w-full bg-red-600 text-white rounded-[20px] h-14 p-2 shadow-brown-glow  hover:bg-red-700 transition-colors duration-200 !important"
          disabled={isPending}
        >
          Delete Account
        </Button>
      </TabsContent>
    </Tabs>
  );
}
