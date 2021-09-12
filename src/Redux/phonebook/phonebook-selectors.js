import { createSelector } from "@reduxjs/toolkit";

export const getContacts = (state) => state.phonebook.contacts;
export const getFilter = (state) => state.phonebook.filter;
export const isLoading = (state) => state.phonebook.loading;

export const getVisibleContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);
