import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  messageList_container: {
    width: "80%",
    border: `1px solid ${ctx.palette.primary.main}`,
    padding: "0 15px 0 0",
    boxSizing: "border-box",
    height: "100%",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
  messages: {
    padding: "15px",
  },
  input: {
    marginTop: "auto",
    color: "#9a9fa1",
    padding: "10px 15px",
    fontSize: "15px",
  },
  icon: {
    cursor: "pointer",
  },
}));
