import { combineReducers } from "redux";
import { appReducer } from "./app/reducer";
import { contactsReducer } from "./contacts/reducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  app: appReducer,
});

export { rootReducer };
