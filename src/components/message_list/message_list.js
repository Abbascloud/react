import React, { useState, useEffect, useRef, useCallback } from "react";
import { Input, InputAdornment } from "@mui/material";
import { Send } from "@mui/icons-material";
import { useStyles } from "./message_list_styles";
import { Message } from "./message";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { profileSelector } from "../../store/profile";
import { messagesSelector, sendBotMessageByThunk } from "../../store/messages";

export const MessageList = () => {
  const { roomId } = useParams();

  const styles = useStyles();
  const messages = useSelector(messagesSelector(roomId));

  const [value, setValue] = useState("");
  const user = useSelector(profileSelector);

  const dispatch = useDispatch();

  const ref = useRef(null);
  const refWrapper = useRef(null);

  const send = useCallback(
    (messageAuthor, messageText) => {
      if (messageText) {
        dispatch(
          sendBotMessageByThunk(
            { author: messageAuthor, message: messageText },
            roomId
          )
        );
        setValue("");
      }
    },
    [roomId, dispatch]
  );

  useEffect(() => {
    if (refWrapper.current) {
      refWrapper.current.scrollTo(0, refWrapper.current.scrollHeight);
    }
  }, [messages]);

  const makeMessage = () => {
    send(user.firstName, value);
  };

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const handlePressInput = ({ code }) => {
    if (code === "Enter") {
      makeMessage();
    }
  };

  return (
    <div className={styles.messageList_container}>
      <div ref={refWrapper} className={styles.messages}>
        {messages.map((message) => (
          <Message
            key={message.id}
            messageData={{ ...message }}
            roomId={roomId}
            dispatch={dispatch}
          />
        ))}
      </div>
      <Input
        fullWidth
        className={styles.input}
        onChange={(e) => setValue(e.target.value)}
        onKeyPress={handlePressInput}
        placeholder="enter ur message"
        inputRef={(input) => input && input.focus()}
        endAdornment={
          <InputAdornment position="end">
            <Send className={styles.icon} onClick={makeMessage} />
          </InputAdornment>
        }
      />
    </div>
  );
};
