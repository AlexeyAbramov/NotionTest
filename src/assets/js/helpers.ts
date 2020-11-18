import { POSSIBLE_COLOR } from "./constants";

export const getColor = (() => {
  let colors = [...POSSIBLE_COLOR];

  return () => {
    if (!colors.length) {
      colors = [...POSSIBLE_COLOR];
    }
    return colors.pop();
  };
})();
