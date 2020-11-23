import { createSelector } from "reselect";
import { RootState } from "../../types/redux";
import { ContactsSortType } from "./types";

const getContacts = (state: RootState) => state.contacts.data;
const getSortType = (state: RootState) => state.contacts.sortType;
const getPageCapacity = (state: RootState) => state.contacts.pageCapacity;
const getCurrentPage = (state: RootState) => state.contacts.currentPage;

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

export const getContactParts = createSelector(
  [getSortedContacts, getPageCapacity, getCurrentPage],
  (contacts, pageCapacity, page) => {
    return contacts.slice((page - 1) * pageCapacity, page * pageCapacity);
  },
);

export const getPageMap = createSelector(
  [getSortedContacts, getPageCapacity],
  (contacts, pageCapacity) => {
    const pageCount = Math.ceil(contacts.length / pageCapacity);
    const pageArrForMap: number[] = [];
    for (let i = 1; i <= pageCount; i += 1) {
      pageArrForMap.push(i);
    }

    return pageArrForMap;
  },
);
