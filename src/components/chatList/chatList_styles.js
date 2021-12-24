import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  chat_container: {
    margin: "25px 25px 0 0",
  },
  add_chat: {
    marginBottom: "25px",
  },
  add_chat_button:{
cursor: "pointer",
  },
  chat_item: {
    color: "#1976d2",
    marginBottom: "5px",
    padding: "15px",
    border: `1px solid ${ctx.palette.primary.main}`,
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
}));
