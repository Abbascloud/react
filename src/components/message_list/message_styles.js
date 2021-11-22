import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  wrapper: {
    border: `1px solid ${ctx.palette.primary.main}`,
    padding: "15px",
    boxSizing: "border-box",
    display: "flex",
    width: "100%",
  },
  chatList_container: {
    width: "20%",
  },
  messageList_container: {
    width: "80%",
  },
  messages: {
    padding: "15px",
  },
  input: {
    color: "#9a9fa1",
    padding: "10px 15px",
    fontSize: "15px",
  },
  icon: {
    cursor: "pointer",
    color: `darkblue ${ctx.palette.primary.main}`,
  },
}));
