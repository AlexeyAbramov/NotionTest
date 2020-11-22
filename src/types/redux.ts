import { AppActions } from "../redux/app/types";
import { ContactsActions } from "../redux/contacts/types";

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypes = AppActions | ContactsActions;
