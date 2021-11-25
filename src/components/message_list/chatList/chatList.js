import { useStyles } from "./chatList_styles";

export const ChatList = () => {
  const styles = useStyles();
  return (
    <div>
      <div className={styles.chat_item}>Chat 1</div>
      <div className={styles.chat_item}>Chat 2</div>
      <div className={styles.chat_item}>Chat 3</div>
    </div>
  );
};
