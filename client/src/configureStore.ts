import createSagaMiddleware from "redux-saga";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

export default (preloadedState?: {}): EnhancedStore => {
  const sagaMiddleware = createSagaMiddleware();
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== "production",
    // The preloadedState argument is only meant to be used for rehydrating state from server or localStorage.
    // Instead: You should let reducers define their own initial state using default parameter
    preloadedState,
  });

  sagaMiddleware.run(rootSaga);

  return store;
};
