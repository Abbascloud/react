import AppBar from "@mui/material/AppBar";

import { useStyles } from "./header_styles";

export const Header = () => {
  const styles = useStyles();

  return (
    <div>
      <AppBar className={styles.wrapper}>
        <h1 className={styles.logo}>Chat</h1>
      </AppBar>
    </div>
  );
};
