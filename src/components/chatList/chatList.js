import { useStyles } from "./chatList_styles";
import { Avatar, AvatarGroup } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { nanoid } from "nanoid";

export const ChatList = () => {
  const { roomId } = useParams();
  const [chats] = useState([
    { name: "room1", id: nanoid() },
    { name: "room2", id: nanoid() },
    { name: "room3", id: nanoid() },
  ]);

  const styles = useStyles();

  return (
    <div className={styles.chat_container}>
      {chats.map((chat) => (
        <Link key={chat.id} to={`/chat/${chat.name}`}>
          <div selected={chat.name === roomId} className={styles.chat_item}>
            <p>{chat.name}</p>|<time>21.21.21</time>|
            <AvatarGroup className={styles.avatarGroup} max={2}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
            </AvatarGroup>
          </div>
        </Link>
      ))}
    </div>
  );
};
