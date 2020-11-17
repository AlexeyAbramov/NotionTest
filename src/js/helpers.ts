import { POSSIBLE_COLOR } from "./constants";

export const getRandomColor = (): string => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export const getRandomElement = (arr: string[]): string =>
  arr[Math.floor(Math.random() * (arr.length - 1))];

export const getColor = (() => {
  let colors = [...POSSIBLE_COLOR];

  return () => {
    if (!colors.length) {
      colors = [...POSSIBLE_COLOR];
    }
    return colors.pop();
  };
})();
