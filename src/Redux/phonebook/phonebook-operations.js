import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import {
  addContactRequest,
  addContactSuccess,
  addContactError,
} from "./phonebook-actions";

export const getContacts = createAsyncThunk(
  "phonebook/getContacts",
  async () => {
    const contacts = await axios.get("/contacts");
    return contacts.data;
  }
);

export const addContact =
  ({ name, number }) =>
  (dispatch) => {
    const contact = {
      name,
      number,
    };

    dispatch(addContactRequest());

    axios
      .post("/contacts", contact)
      .then(({ data }) => dispatch(addContactSuccess(data)))
      .catch((error) => dispatch(addContactError(error)));
  };

export const deleteContact = createAsyncThunk(
  "phonebook/deleteContact",
  async (contactId) => {
    await axios.delete(`/contacts/${contactId}`);
    return contactId;
  }
);
