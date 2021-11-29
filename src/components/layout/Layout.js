import { useStyles } from "./layoutStyles";

export const Layout = ({ chats, messages }) => {
  const styles = useStyles();

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chats}>{chats}</div>
      <div className={styles.messages}>{messages}</div>
    </div>
  );
};
