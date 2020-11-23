import { ContactFilterState, ContactFilterActions, ContactFilterActionType } from "./types";

export const initialState: ContactFilterState = {
  name: "",
  gender: "",
  nat: "",
};

export const contactFilterReducer = (
  state = initialState,
  action: ContactFilterActions,
): ContactFilterState => {
  switch (action.type) {
    case ContactFilterActionType.CHANGE_VALUE:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    case ContactFilterActionType.RESET_VALUE:
      return {
        name: "",
        gender: "",
        nat: "",
      };
    default:
      return state;
  }
};
