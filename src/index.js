import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import { MessageList } from "./components";
import { Header } from "./header";

const theme = createTheme({});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Header />
      <MessageList />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
