import { ContactFilterActionType, PossibleFilterName } from "./types";

export const changeFilterValue = (name: PossibleFilterName, value: string) => ({
  type: ContactFilterActionType.CHANGE_VALUE,
  payload: {
    name,
    value,
  },
} as const);

export const resetFilter = () => ({
  type: ContactFilterActionType.RESET_VALUE,
} as const);
