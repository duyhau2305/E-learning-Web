import { InitialUserState, UserAction, UserState } from "./types";

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SIGN_IN_FAILED = 'SIGN_IN_FAILED'
export const SIGN_OUT_REQUEST='SIGN_OUT_REQUEST'
export const SIGN_UP_REQUEST='SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS='SIGN_UP_SUCCESS'
export const SIGN_UP_FAILED='SIGN_UP_FAILED'
export const RESET_PASSWORD_REQUEST='REQUEST_PASSWORD_REQUEST'
export const RESET_PASSWORD_SUCCESS='REQUEST_PASSWORD_SUCCESS'
export const RESET_PASSWORD_FAILED='REQUEST_PASSWRORD_FAILED'


export const CLEANUP = "USER_CLEANUP";

export function signInRequest(request: any): UserAction{
    return{
        type: SIGN_IN_REQUEST,
        payload:{
            isSigning: true,
            requestSignIn: request
        }
    }
}
export function signInSuccess(data: any): UserAction{
    return{
        type: SIGN_IN_SUCCESS,
        payload: {
            isSigning: false,
            loginSuccess: true,
            dataUser: data
        }
    }
}

export function signInFailed(error: any): UserAction{
    return{
        type: SIGN_IN_SUCCESS,
        payload: {
            isSigning: false,
            dataUser: null,
            messageError: error
        }
    }
}

export function signUpRequest(request: any): UserAction{
    return{
        type: SIGN_UP_REQUEST,
        payload: {
            isSignUp: true,
            requestSignUp: request
        }
    }
}
export function signUpSuccess(data: any): UserAction{
    return{
        type: SIGN_UP_SUCCESS,
        payload: {
            isSignUp: false,
            dataUser: data
        }
    }
}

export function signUpFailed(error: any): UserAction{
    return{
        type: SIGN_UP_FAILED,
        payload: {
            isSignUp: false,
            dataUser: null,
            messageError: error
        }
    }
}

export function resetPasswordRequest(data: any): UserAction{//Send data user for request
    return{
        type: RESET_PASSWORD_REQUEST,
        payload: {
          isResetPassword: true,
          requestResetPasword: data
        }
    }
}

export function resetPasswordSuccess(newPassword: string): UserAction{//Send data user for request
    return{
        type: RESET_PASSWORD_SUCCESS,
        payload: {
          isResetPassword: false,
          resetPasswordSuccess: newPassword
        }
    }
}

export function resetPasswordFailed(error: string): UserAction{//Send data user for request
    return{
        type: RESET_PASSWORD_SUCCESS,
        payload: {
          isResetPassword: false,
          resetPaswordFailed: error
        }
    }
}

export function CleanupDataUser(): UserAction{
    return{
        type: CLEANUP,
        payload: InitialUserState
    }
}