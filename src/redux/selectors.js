export const selectContacts = state => state.contacts.items;
export const selectFilter = state => state.filter;

export const selectFilteredContacts = state => {
  return state.contacts.items.filter(({ name }) =>
    name.toLowerCase().includes(state.filter.toLowerCase())
  );
};

export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
