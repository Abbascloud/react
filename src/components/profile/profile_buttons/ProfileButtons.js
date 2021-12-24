import { useStyles } from "./profileButtons_style";
import Fab from "@mui/material/Fab";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { togleVisibleProfile, profileSelector } from "../../../store/profile";
import { useSelector, useDispatch } from "react-redux";

export const ProfileButtons = () => {
  const { ...profile } = useSelector(profileSelector);
  const styles = useStyles();
  const dispatch = useDispatch();
  return (
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
  );
};
