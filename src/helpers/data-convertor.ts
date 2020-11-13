import { UserBirthday, UserLoc } from "../types/users";

export const convertFullName = (title: string, first: string, last: string): string =>
  `${title}. ${first} ${last}`;

export const convertLocation = (location: UserLoc): string => {
  const { country, street, city, state, postcode } = location;
  return `/${country}/\n${street.number} ${street.name}, ${city}, ${state} ${postcode}`;
};

export const convertBirthday = (birthdayData: UserBirthday): string => {
  const { age, date } = birthdayData;
  const dateObj = new Date(date);
  const option: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour12: true,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const dateStr = dateObj.toLocaleDateString("en-US", option);
  return `${dateStr}\n${age} years`;
};
