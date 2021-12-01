import { UPDATE_PROFILE, TOGLE_VISIBLE_PROFILE } from "./types";

const initialState = {
  firstName: "Abbas",
  lastName: "Mamedov",
  isvisibleProfile: false,
  email: "email@mail.ru",
  role: "admin",
  phone: "89999999",
  gender: "Male",
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
