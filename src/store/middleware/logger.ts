import { Middleware } from "redux";

import { RootState } from "../store";

export const loggerMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action) => {
    if (!(action as any).type) {
      return next(action);
    }

    console.log("type: ", (action as any).type);
    console.log("payload: ", (action as any).payload);
    console.log("currentState: ", store.getState());

    next(action);

    console.log("next state: ", store.getState());
  };
