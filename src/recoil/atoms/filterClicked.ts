import { atom } from "recoil";

export const filterClicked = atom<boolean>({
  key: "filterClicked", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
