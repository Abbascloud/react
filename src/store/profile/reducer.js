import { UPDATE_PROFILE, TOGLE_VISIBLE_PROFILE } from "./types";

const initialState = {
  firstName: "User",
  lastName: "",
  isvisibleProfile: false,
  email: "",
  role: "",
  phone: "",
  gender: "",
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGLE_VISIBLE_PROFILE: {
      return { ...state, isvisibleProfile: !state.isvisibleProfile };
    }
    case UPDATE_PROFILE: {
      return { ...state, ...action.payload };
    }

    default:
      return state;
  }
};
