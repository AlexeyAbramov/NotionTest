import { CONTACTS_PER_PAGE } from "../../assets/js/constants";
import { ContactsSortType, ContactActionType, ContactsActions, ContactState, ContactsViewType } from "./types";

export const initialState: ContactState = {
  data: [],
  view: ContactsViewType.TABLE_VIEW,
  pageCapacity: CONTACTS_PER_PAGE,
  sortType: ContactsSortType.BY_NAME_AZ,
  currentPage: 1,
};

export const contactsReducer = (state = initialState, action: ContactsActions): ContactState => {
  switch (action.type) {
    case ContactActionType.CONTACTS_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case ContactActionType.SET_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};