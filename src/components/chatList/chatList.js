import { useStyles } from "./chatList_styles";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { nanoid } from "nanoid";

export const ChatList = (room) => {
  const [chats, setChats] = useState([]);
  const styles = useStyles();
  const [chatName, setChatName] = useState("");

  const changeName = (event) => {
    setChatName(event.target.value);
  };
  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addChat();
    }
  };
  const addChat = () => {
    setChats([...chats, { id: nanoid(), name: { chatName } }]);
  };
  return (
    <div className={styles.chat_container}>
      <Input
        fullWidth
        className={styles.input}
        value={chatName}
        onChange={changeName}
        onKeyPress={handlePressInput}
        placeholder="enter chat name"
        inputRef={(input) => input && input.focus()}
        endAdornment={
          <InputAdornment position="end">
            <Send className={styles.icon} onClick={addChat} />
          </InputAdornment>
        }
      />
      <div>{chatName}</div>
    </div>
  );
};
