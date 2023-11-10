import { configureStore } from "@reduxjs/toolkit";

import { usersSlice } from "./slices/usersSlice";
import { clientesSlice } from "./slices/clientesSlice";

export const store = configureStore({
  reducer: {

    users: usersSlice.reducer,
    clientes: clientesSlice.reducer,

  },
});
