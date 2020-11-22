import { CONTACTS_PER_PAGE } from "../../assets/js/constants";
import { ContactsSortType, ContactActionType, ContactsActions, ContactState, ContactsViewType } from "./types";

export const initialState: ContactState = {
  data: [],
  view: ContactsViewType.TABLE_VIEW,
  contactsPerPage: CONTACTS_PER_PAGE,
  sortType: ContactsSortType.BY_NAME_AZ,
};

export const contactsReducer = (state = initialState, action: ContactsActions): ContactState => {
  switch (action.type) {
    case ContactActionType.CONTACTS_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
