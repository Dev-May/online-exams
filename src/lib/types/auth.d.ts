declare type ApplicationUser = {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  role: string;
  isVerified: boolean;
};

declare type LoginResponse = {
  token: string;
  user: ApplicationUser;
};

declare type RegisterResponse = {
  token: string;
  user: ApplicationUser;
};

declare type ForgotPasswordResponse = {
  message: string;
  info: string;
};

declare type ResetPasswordResponse = {
  message: string;
  token: string;
};

declare type VerifyCodeResponse = {
  status: string;
};

declare type ChangePasswordResponse = {
  message: string;
  token: string;
};

declare type DeleteAccountResponse = {
  message: string;
};

declare type EditProfileResponse = {
  user: ApplicationUser;
};

declare type ProfileDataResponse = {
  user: ApplicationUser;
};
