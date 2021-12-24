import { useStyles } from "./profile_styles";
import { UserForm } from "./user_form";
import { UserInfo } from "./user_info";
import { ProfileButtons } from "./profile_buttons";
import { useSelector } from "react-redux";
import { profileSelector } from "../../store/profile";

export const Profile = () => {
  const styles = useStyles();

  const { ...profile } = useSelector(profileSelector);
  return (
    <div className={styles.profileContainer}>
      <h1 className={styles.profileHeader}>Profile page</h1>
      <UserForm {...profile} />
      <ProfileButtons />
      {profile.isvisibleProfile && <UserInfo {...profile} />}
    </div>
  );
};
