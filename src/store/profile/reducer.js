import {
  CHANGE_GENDER_MALE,
  CHANGE_GENDER_FEEMALE,
  CHANGE_GENDER_OTHER,
} from "./types";

const initialState = { genderValue: "" };

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_GENDER_MALE:
      return {
        ...state,
        genderValue: "male",
      };
    case CHANGE_GENDER_FEEMALE:
      return {
        ...state,
        genderValue: "feemale",
      };
    case CHANGE_GENDER_OTHER:
      return {
        ...state,
        genderValue: "other",
      };
    default:
      return state;
  }
};
