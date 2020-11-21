import { ContactActionType, ContactsActions, ContactState } from "./types";

export const initialState: ContactState = {
  contacts: [],
};

export const contactsReducer = (state = initialState, action: ContactsActions): ContactState => {
  switch (action.type) {
  case ContactActionType.CONTACTS_FETCH_SUCCESS:
    return {
      contacts: action.payload,
    };
  default:
    return state;
  }
};
