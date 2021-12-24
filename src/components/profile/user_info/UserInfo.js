// import { useStyles } from "./userInfo_style";

export const UserInfo = ({ firstName, lastName, phone, email, gender }) => {
  //   let styles = useStyles();
  return (
    <div>
      <ul>
        <li>first name: {firstName}</li>
        <li>second name: {lastName}</li>
        <li>phone number: {phone}</li>
        <li>email: {email}</li>
        <li>gender: {gender}</li>
      </ul>
    </div>
  );
};
