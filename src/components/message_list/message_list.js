import React, { useState, useEffect, useRef } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./message_styles";
import { Message } from "./message";
import { ChatList } from "./chatList";

export const MessageList = () => {
  const styles = useStyles();
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");

  const refMessage = useRef(null);

  useEffect(() => {
    refMessage.current?.focus();
  }, []);
  useEffect(() => {
    let timerID = null;
    if (messages.length && messages[messages.length - 1].author !== "System") {
      timerID = setTimeout(addSysAnswer, 1500);
    }
    return () => clearInterval(timerID);
  });

  const changeMessage = (event) => {
    setMessage(event.target.value);
  };
  const clearInput = () => {
    setMessage("");
  };

  const addMessage = () => {
    if (message) {
      setMessages([
        ...messages,
        {
          id: messages.length,
          author: "User",
          text: message,
          date: new Date(),
        },
      ]);
      setCount(count + 1);
      clearInput();
    }
  };

  const addSysAnswer = () => {
    setMessages([
      ...messages,
      {
        id: messages.length,
        author: "System",
        text: "hello",
        date: new Date(),
      },
    ]);
    setCount(count + 1);
  };
  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addMessage();
    }
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.chatList_container}>
        <ChatList />
      </div>
      <div className={styles.messageList_container}>
        <Input
          fullWidth
          className={styles.input}
          ref={refMessage}
          value={message}
          onChange={changeMessage}
          onKeyPress={handlePressInput}
          placeholder="enter ur message"
          inputRef={(input) => input && input.focus()}
          endAdornment={
            <InputAdornment position="end">
              <Send className={styles.icon} onClick={addMessage} />
            </InputAdornment>
          }
        />
        <div className={styles.messages}>
          {messages.map((message) => (
            <Message message={message} />
          ))}
        </div>
      </div>
    </div>
  );
};
