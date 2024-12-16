// ./redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contactsSlice.js";
import filtersReducer from "./filtersSlice.js";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filtersReducer,
  },
});

export default store;
