import { AppActions } from "../redux/app/types";
import { ContactsActions } from "../redux/contacts/types";
import { rootReducer } from "../redux/rootReducer";

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type ActionTypes = AppActions | ContactsActions;

export type RootState = ReturnType<typeof rootReducer>;