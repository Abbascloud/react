import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  messageList_container: {
    border: `1px solid ${ctx.palette.primary.main}`,
    padding: "0 15px 0 0",
    boxSizing: "border-box",
    minHeight: "80vh",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    marginTop: "25px",
  },
  messages: {
    padding: "15px",
    height: "70vh",
    overflow: "scroll",
    overflowX: "hidden",
    "&::-webkit-scrollbar": {
      width: "10px",
      backgroundColor: `${ctx.palette.primary.main}`,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "10px",
      backgroundColor: `${ctx.palette.primary.main}`,
    },
    "&::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.2)",
      borderRadius: "10px",
      backgroundColor: "#FFFF",
    },
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
