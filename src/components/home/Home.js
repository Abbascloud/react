import { Link } from "react-router-dom";
import { useStyles } from "./home_styles";

export const Home = () => {
  const styles = useStyles();
  return (
    <div>
      <h1>Welcome to our chat</h1>
      <nav>
        <Link className={styles.navLink} to="/chat">
          Chat
        </Link>
        <Link className={styles.navLink} to="/profile">
          Profile
        </Link>
      </nav>
    </div>
  );
};
