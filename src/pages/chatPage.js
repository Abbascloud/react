import { Routes, Route } from "react-router-dom";
import { Layout, ChatList, MessageList } from "../components";

export const ChatPage = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout chats={<ChatList />} messages={<div>Choose ur chat</div>} />
        }
      />
      <Route
        path="/:roomId"
        element={<Layout chats={<ChatList />} messages={<MessageList />} />}
      />
    </Routes>
  );
};
