import {
  CHANGE_GENDER_MALE,
  CHANGE_GENDER_FEEMALE,
  CHANGE_GENDER_OTHER,
} from "./types";

export const changeGenderMale = () => ({ type: CHANGE_GENDER_MALE });
export const changeGenderFeemale = () => ({ type: CHANGE_GENDER_FEEMALE });
export const changeGenderOther = () => ({ type: CHANGE_GENDER_OTHER });
