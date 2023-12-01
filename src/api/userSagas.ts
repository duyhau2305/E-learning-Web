import { all, call, fork, put, select, take } from "redux-saga/effects";
import * as UserAction from "../lib/redux/user/actions";
import * as userReducer from "../lib/redux/user/reducers";
import { toast } from "react-toastify";
import axios from "../common/axiosIntance";

const api = "/login";

function* singIn() {
  try {
    const request = yield select(userReducer.requestSignIn);
    if (!request)
      yield call(toast.error, "Type your user account info to sign in");
    const response = yield call(axios.post, api, request);
    yield put(UserAction.CleanupDataUser());
    if (response?.data) {
      yield put(UserAction.signInFailed("Failed to sign in"));
      yield call(toast.error, "Failed to sign in");
    } else {
      yield put(UserAction.signInSuccess(response.data));
    }
  } catch (error: any) {
    yield put(UserAction.signInFailed(error));
    yield call(toast.error, "Failed to sign in. Please try again");
  }
}

function* actionSignInListener() {
  while (true) {
    yield take(UserAction.SIGN_IN_REQUEST);
    yield fork(singIn);
  }
}

function* actionListener() {
  yield all([fork(actionSignInListener)]);
}

export default function* root() {
  yield all([fork(actionListener)]);
}
