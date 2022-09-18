import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    setFilter(state, { payload }) {
      state.filter = payload;
    },
  },
});

export const { setFilter } = contactsSlice.actions;
export const getFilter = state => state.filter.filter;
