import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './services';
import { contactsSlice } from './contactsSlice';

export const store = configureStore({
  reducer: {
    filter: contactsSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});
