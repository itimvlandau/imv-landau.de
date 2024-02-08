import createSagaMiddleware from "redux-saga";
import { configureStore, Middleware, } from "@reduxjs/toolkit";
import { writeStorage } from '@rehooks/local-storage';
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const localStorageMiddleware: Middleware = ({ getState }) => {
  return next => action => {
    const result = next(action);
    writeStorage('applicationState', getState());
    return result;
  };
};

const reHydrateStore = () => {
  if (localStorage.getItem('applicationState') !== null) {
    return JSON.parse(localStorage.getItem('applicationState')!); // re-hydrate the store
  }
};

const store = configureStore({
  reducer: rootReducer,
  preloadedState: reHydrateStore(),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware).concat(localStorageMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
