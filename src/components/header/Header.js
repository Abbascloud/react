import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import { useStyles } from "./header_styles";

export const Header = () => {
  const styles = useStyles();

  return (
    <div>
      <AppBar className={styles.wrapper}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/profile">
          Profile
        </Link>
      </AppBar>
    </div>
  );
};
