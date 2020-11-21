import { IUserInfo } from "../../types/users";
import { ContactActionType } from "./types";

export const setContacts = (contacts: IUserInfo[]) => ({
  type: ContactActionType.CONTACTS_FETCH_SUCCESS,
  payload: contacts,
} as const);

export const setError = (error: string) => ({
  type: ContactActionType.CONTACTS_FETCH_ERROR,
  payload: error,
} as const);

export const fetchContacts = () => ({
  type: ContactActionType.CONTACTS_FETCH,
} as const);
