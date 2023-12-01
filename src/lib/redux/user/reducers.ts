import * as actions from './actions'

import { InitialUserState, UserAction, UserState } from "./types";

import { RootState } from "../store";

/* All state of user */

export const dataUser = (state: RootState) => state.user.dataUser

export const requestSignIn = (state: RootState) => state.user.requestSignIn
export const requestSignUp = (state: RootState) => state.user.requestSignUp
export const isSigning = (state: RootState) => state.user.isSigning
export const isSignUp = (state: RootState) => state.user.isSignUp
export const isSignOut = (state: RootState) => state.user.isSignOut
export const requestResetPasword = (state: RootState) => state.user.requestResetPasword
export const resetPasswordSuccess = (state: RootState) => state.user.resetPasswordSuccess
export const resetPaswordFailed = (state: RootState) => state.user.resetPaswordFailed
export const loginSuccess = (state: RootState) => state.user.loginSuccess


function userReducer(state: UserState = InitialUserState, action: UserAction){
    const _state = {
        ...state,
      };
      switch(action.type){
        case actions.SIGN_IN_REQUEST:
        case actions.SIGN_IN_SUCCESS:
        case actions.SIGN_IN_FAILED:
        case actions.SIGN_UP_REQUEST:
        case actions.SIGN_UP_SUCCESS:
        case actions.SIGN_UP_FAILED:
        case actions.SIGN_OUT_REQUEST:
        case actions.RESET_PASSWORD_REQUEST:
        case actions.RESET_PASSWORD_SUCCESS:
        case actions.RESET_PASSWORD_FAILED:
        case actions.CLEANUP:
            return{
                ..._state,
                ...action.payload
            }
        default:
            return{
                ...state
            }
      }
    }

    export default userReducer