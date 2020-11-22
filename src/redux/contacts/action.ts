import { IUserInfo } from "../../types/users";
import { ContactActionType } from "./types";

export const setContacts = (contacts: IUserInfo[]) =>
  ({
    type: ContactActionType.CONTACTS_FETCH_SUCCESS,
    payload: contacts,
  } as const);

export const fetchContacts = () =>
  ({
    type: ContactActionType.CONTACTS_FETCH,
  } as const);

export const setPage = (pageNumber: number) =>
  ({
    type: ContactActionType.SET_PAGE,
    payload: pageNumber,
  } as const);
