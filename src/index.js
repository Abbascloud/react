import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { Home, MessageList, Header, ChatList, Profile } from "./components";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";

const theme = createTheme({
  palette: {},
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <div className="chatContainer">
          <ChatList />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/msg_list" element={<MessageList />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<h1>404</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
