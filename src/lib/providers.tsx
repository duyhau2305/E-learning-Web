import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persistor, store } from "./redux/store";

export const Providers = (props: React.PropsWithChildren) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<div className="">Loading...</div>} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};
