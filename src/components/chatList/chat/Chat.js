import { Link, useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import { useStyles } from "./chat_styles";

import { RemoveConversation } from "../../../store/conversations";
import { removeMessages } from "../../../store/messages";
import { format } from "date-fns";

export const Chat = ({ chatData, dispatch, roomId }) => {
  const styles = useStyles();
  const navigate = useNavigate();
  const removeChat = () => {
    dispatch(RemoveConversation(chatData.id));
    dispatch(removeMessages(chatData.name));
    setTimeout(() => navigate("/chat"), 100);
  };
  return (
    <div selected={chatData.name === roomId} className={styles.chat_item}>
      <Link className={styles.chat_link} to={`/chat/${chatData.name}`}>
        <p className={styles.chat_name}>{chatData.name}</p>|
        <time className={styles.chat_date}>
          {format(new Date(chatData.date), "yyyy-MM-dd")}
        </time>
        |
      </Link>
      <ClearIcon
        data-id={chatData.id}
        onClick={removeChat}
        className={styles.clearIcon}
      />
    </div>
  );
};
