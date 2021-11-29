import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { ChatPage, ProfilePage, HomePage } from "./pages";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Header } from "./components";
import { Provider } from "react-redux";
import { store } from "./store";

const theme = createTheme({
  palette: {},
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chat/*" element={<ChatPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/*" element={<h1>error 404</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
