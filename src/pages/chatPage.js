import { Routes, Route } from "react-router-dom";
import { Layout, ChatList, MessageList, ChatLanding } from "../components";

export const ChatPage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout chats={<ChatList />} messages={<ChatLanding />} />}
      />
      <Route
        path="/:roomId"
        element={<Layout chats={<ChatList />} messages={<MessageList />} />}
      />
    </Routes>
  );
};
