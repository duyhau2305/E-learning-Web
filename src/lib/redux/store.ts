import { Store } from "redux";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import createSagaMiddleware, { Task } from "redux-saga";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { fork, all } from "redux-saga/effects";
import userReducer from "./user/reducers";
import userSagas from "../../api/userSagas";
import { logger } from "./middleware";

const rootReducer = combineReducers({
  user: userReducer,
});

function* rootSaga() {
  yield all([fork(userSagas)]);
}

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, logger];
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middlewares),
  devTools: process.env.NODE_ENV !== "production",
});

export interface SagaStore extends Store {
  sagaTask?: Task;
}

(store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

const appState = () => store.getState();
const appDispatch = (action: any | unknown): any => store.dispatch(action);

/* Types */

export type RootStore = typeof store;
export type RootState = ReturnType<typeof store.getState>;

export { store, persistor, appState, appDispatch };
