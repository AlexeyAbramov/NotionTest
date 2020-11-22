import { createSelector } from "reselect";
import { RootState } from "../../types/redux";
import { ContactsSortType } from "./types";

const getContacts = (state: RootState) => state.contacts.data;
const getSortType = (state: RootState) => state.contacts.sortType;

export const getSortedContacts = createSelector(
  [getContacts, getSortType],
  (contacts, sortType) => {
    switch (sortType) {
      case ContactsSortType.NOT_SORTED:
        return contacts;
      case ContactsSortType.BY_NAME_AZ:
        return [...contacts].sort((a, b) => a.name.first.localeCompare(b.name.first));
      case ContactsSortType.BY_NAME_ZA:
        return [...contacts].sort((a, b) => b.name.first.localeCompare(a.name.first));
      default:
        return contacts;
    }
  },
);
