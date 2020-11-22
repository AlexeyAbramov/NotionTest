import { InferValueTypes } from "../../types/redux";
import { IUserInfo } from "../../types/users";
import * as actions from "./action";

export enum ContactActionType {
  CONTACTS_FETCH = "contacts/CONTACTS_FETCH",
  CONTACTS_FETCH_SUCCESS = "contacts/CONTACTS_FETCH_SUCCESS",
  CONTACTS_FETCH_ERROR = "contacts/CONTACTS_FETCH_ERROR",
}

export interface ContactState {
  readonly data: IUserInfo[],
}

export type ContactsActions = ReturnType<InferValueTypes<typeof actions>>;
