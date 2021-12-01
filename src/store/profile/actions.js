import { UPDATE_PROFILE, TOGLE_VISIBLE_PROFILE } from "./types";

export const updateProfile = (profile) => {
  return { type: UPDATE_PROFILE, payload: profile };
};
export const togleVisibleProfile = () => {
  return { type: TOGLE_VISIBLE_PROFILE };
};
