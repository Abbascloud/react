import { useStyles } from "./chatList_styles";
import { conversationsSelector } from "../../store/conversations";
import { useSelector } from "react-redux";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import { createConversation } from "../../store/conversations";
import { useDispatch } from "react-redux";
import { Chat } from "./chat";
import { useParams } from "react-router-dom";

export const ChatList = () => {
  const chats = useSelector(conversationsSelector);
  const styles = useStyles();
  const dispatch = useDispatch();
  const [chatName, setChatName] = useState("");
  const { roomId } = useParams();

  const checkNameValide = () => {
    for (let i = 0; i < chats.length; i++) {
      if (chats[i].name === chatName) {
        return false;
      }
    }
    return true;
  };
  const addChatListItem = () => {
    if (chatName && checkNameValide()) {
      dispatch(createConversation(chatName));
    }
  };

  return (
    <div className={styles.chat_container}>
      <div className={styles.add_chat}>
        <div className={styles.chat_item}>
          <p>Add chat</p>|
          <input
            placeholder="enter chat name"
            type="text"
            value={chatName}
            onChange={(event) => {
              setChatName(event.target.value);
            }}
          />
          |
          <AddCircleIcon
            className={styles.add_chat_button}
            onClick={addChatListItem}
          />
        </div>
      </div>
      <div>
        {chats.map((chat) => (
          <Chat
            key={chat.id}
            chatData={chat}
            dispatch={dispatch}
            roomId={roomId}
          />
        ))}
      </div>
    </div>
  );
};
