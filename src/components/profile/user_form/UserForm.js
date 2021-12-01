import { useStyles } from "./user_form_styles";
import Fab from "@mui/material/Fab";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../../store/profile";

export function UserForm({ firstName, lastName, email, phone, gender }) {
  const styles = useStyles();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    gender: "",
  });

  const dispatch = useDispatch();

  const handleChangeForm = (e) => {
    const field = e.target.getAttribute("data-name");

    setForm({
      ...form,
      [field]: e.target.value,
    });
  };

  return (
    <form className={styles.UserForm}>
      <input
        type="text"
        className={styles.changeName}
        placeholder="first name"
        data-name="firstName"
        id="changeFirstName"
        onChange={handleChangeForm}
      />
      <label for="changeFirstName">first name</label>
      <hr />
      <input
        type="text"
        placeholder="last name"
        data-name="lastName"
        className={styles.changeSername}
        id="changeSecondName"
        onChange={handleChangeForm}
      />
      <label for="changeSecondName">second name:</label>
      <hr />
      <input
        placeholder="phone number"
        type="tel"
        className={styles.changeSername}
        data-name="phone"
        id="changePhone"
        onChange={handleChangeForm}
      />
      <label for="changePhone">phone number</label>
      <hr />
      <input
        placeholder="email"
        type="email"
        className={styles.changeSername}
        data-name="email"
        id="changeEmail"
        onChange={handleChangeForm}
      />
      <label for="changeEmail">email</label>
      <hr />
      <div className={styles.GenderBoxes}>
        <input
          name="changeGender"
          id="boxMale"
          value="male"
          type="radio"
          className={styles.box}
          onChange={handleChangeForm}
          data-name="gender"
        />
        <label for="boxMale">Male</label>

        <input
          name="changeGender"
          value="female"
          type="radio"
          id="boxFeemale"
          className={styles.box}
          onChange={handleChangeForm}
          data-name="gender"
        />
        <label for="boxFeemale">Feemale </label>

        <input
          name="changeGender"
          value="other"
          type="radio"
          id="boxOther"
          className={styles.box}
          onClick={handleChangeForm}
          data-name="gender"
        />
        <label for="boxOther">Other</label>
      </div>
      <p>
        confirm ur gender <b> </b>
      </p>
      <hr />
      <Fab
        onClick={() => dispatch(updateProfile(form))}
        className={styles.fab}
        variant="extended"
        size="small"
        color="primary"
        aria-label="add"
      >
        confirm
      </Fab>
    </form>
  );
}
