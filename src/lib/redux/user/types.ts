export type UserState = {
  dataUser?: any;
  requestSignIn?: any;
  isSigning?: boolean;
  isSignOut?: boolean;
  requestSignUp?: any;
  isSignUp?: boolean;
  requestResetPasword?: any;
  isResetPassword?: boolean;
  resetPaswordFailed?: any;
  resetPasswordSuccess?: any;
  messageError?: any;
  loginSuccess?:boolean;
};

export type UserAction = {
  type: string;
  payload?: UserState;
};

export const InitialUserState: UserState = {
  dataUser: null,
  requestSignIn: null,
  isSigning: false,
  isSignOut: false,
  requestSignUp: null,
  isSignUp: false,
  requestResetPasword: null,
  isResetPassword: false,
  resetPaswordFailed: null,
  resetPasswordSuccess: null,
  messageError: null,
  loginSuccess: false
};
