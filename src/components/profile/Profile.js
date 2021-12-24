import { useStyles } from "./profile_styles";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import {
  changeGenderMale,
  changeGenderFeemale,
  changeGenderOther,
} from "../../store/profile";

import { useSelector, useDispatch } from "react-redux";

export const Profile = () => {
  const styles = useStyles();
  const GenderValue = useSelector((state) => state.profile.genderValue);
  const dispatch = useDispatch();

  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileHeader}>Profile page</h1>
      <form className={styles.genderForm}>
        <div className={styles.boxes}>
          <input
            name="changeGender"
            onClick={() => dispatch(changeGenderMale())}
            value="male"
            type="radio"
            id="box-1"
            className={styles.box}
          />
          <label for="box-1">Male</label>

          <input
            name="changeGender"
            onClick={() => dispatch(changeGenderFeemale())}
            value="female"
            type="radio"
            id="box-2"
            className={styles.box}
          />
          <label for="box-2">Feemale </label>

          <input
            name="changeGender"
            onClick={() => dispatch(changeGenderOther())}
            value="other"
            type="radio"
            id="box-3"
            className={styles.box}
          />
          <label for="box-3">Other</label>
        </div>
        <p>
          confirm ur gender <b>{GenderValue}</b>
        </p>
        <Fab
          className={styles.fab}
          variant="extended"
          size="small"
          color="primary"
          aria-label="add"
        >
          <NavigationIcon sx={{ mr: 1 }} />
          confirm
        </Fab>
      </form>
    </div>
  );
};
