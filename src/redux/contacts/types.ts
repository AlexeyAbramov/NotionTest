import { InferValueTypes } from "../../types/redux";
import { IUserInfo } from "../../types/users";
import * as actions from "./action";

export enum ContactActionType {
  CONTACTS_FETCH = "CONTACTS_FETCH",
  CONTACTS_FETCH_SUCCESS = "CONTACTS_FETCH_SUCCESS",
  CONTACTS_FETCH_ERROR = "CONTACTS_FETCH_ERROR",
}

export interface ContactState {
  readonly contacts: IUserInfo[],
}

export type ContactsActions = ReturnType<InferValueTypes<typeof actions>>;
