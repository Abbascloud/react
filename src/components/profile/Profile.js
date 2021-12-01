import { useStyles } from "./profile_styles";
import Fab from "@mui/material/Fab";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { togleVisibleProfile } from "../../store/profile";
import { UserForm } from "./user_form";
import { useSelector, useDispatch } from "react-redux";

export const Profile = () => {
  const styles = useStyles();

  const { ...profile } = useSelector((state) => {
    return state.profile;
  });

  const dispatch = useDispatch();

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileHeader}>Profile page</h1>
      <UserForm {...profile} />

      <Fab
        className={styles.fab}
        onClick={() => dispatch(togleVisibleProfile())}
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
      >
        {!profile.isvisibleProfile && (
          <div className={styles.fabContent}>
            <ArrowCircleDownIcon sx={{ mr: 1 }} />
            show user info
          </div>
        )}
        {profile.isvisibleProfile && (
          <div className={styles.fabContent}>
            <ArrowCircleUpIcon sx={{ mr: 1 }} />
            hide user info
          </div>
        )}
      </Fab>
      {profile.isvisibleProfile && (
        <div>
          <ul>
            <li>first name: {profile.firstName}</li>
            <li>second name: {profile.lastName}</li>
            <li>phone number: {profile.phone}</li>
            <li>gender: {profile.gender}</li>
          </ul>
        </div>
      )}
    </div>
  );
};
