import React, { useState, useEffect, useRef } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./message_list_styles";
import { Message } from "./message";
import { useParams } from "react-router";

export const MessageList = () => {
  const { roomId } = useParams();
  const styles = useStyles();

  const [messages, setMessages] = useState({});
  const [message, setMessage] = useState("");
  const roomMessages = messages[roomId] ?? [];

  const refMessage = useRef(null);
  const refMessagesContainer = useRef(null);

  useEffect(() => {
    if (refMessagesContainer.current) {
      refMessagesContainer.current.scrollTo(
        0,
        refMessagesContainer.current.scrollHeight
      );
    }
  }, [messages]);

  useEffect(() => {
    refMessage.current?.focus();
  }, []);
  useEffect(() => {
    const roomMessages = messages[roomId] ?? [];
    const lastMesssage = roomMessages[roomMessages.length - 1];
    let timerID = null;
    if (roomMessages.length && lastMesssage.author !== "System") {
      timerID = setTimeout(addSysAnswer, 1500);
    }
    return () => clearInterval(timerID);
  }, [messages, roomId]);

  const changeMessage = (event) => {
    setMessage(event.target.value);
  };
  const clearInput = () => {
    setMessage("");
  };

  const addMessage = () => {
    if (message) {
      setMessages({
        ...messages,
        [roomId]: [
          ...(messages[roomId] ?? []),
          { author: "User", text: message, date: new Date() },
        ],
      });
      clearInput();
    }
  };

  const addSysAnswer = () => {
    setMessages({
      ...messages,
      [roomId]: [
        ...(messages[roomId] ?? []),
        { author: "System", text: "hello", date: new Date() },
      ],
    });
  };
  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      addMessage();
    }
  };
  return (
    <div className={styles.messageList_container}>
      <div ref={refMessagesContainer} className={styles.messages}>
        {roomMessages.map((message) => (
          <Message key={message.id} messageData={message} />
        ))}
      </div>
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
    </div>
  );
};
