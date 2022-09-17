import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
  },
  reducers: {
    addContact(state, { payload }) {
      state.items.push(payload);
    },
    removeContact(state, { payload }) {
      state.items = state.items.filter(item => item.id !== payload);
    },
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { addContact, removeContact, setFilter } = contactsSlice.actions;
export default contactsSlice;
export const getContacts = state => state.contacts.items;
export const getFilter = state => state.contacts.filter;
