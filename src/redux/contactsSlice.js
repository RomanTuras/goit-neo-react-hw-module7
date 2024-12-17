import {createSelector, createSlice} from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps.js";

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handleRejected)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id,
        );
      })
      .addCase(deleteContact.rejected, handleRejected);
  },
});

export const selectItems = (state) => state.contacts.items;
export const selectFilter = (state) => state.filter.name;

export const selectFilteredContacts = createSelector(
    [selectItems, selectFilter],
    (contacts, filter) => {
      if (filter) {
        return contacts.filter((contact) =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
      } else return contacts;
    }
);

export default contactsSlice.reducer;
