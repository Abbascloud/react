import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  chat_name: {
    textDecoration: "none",
    color: `${ctx.palette.primary.main}`,
  },
  chat_date: {
    textDecoration: "none",
    color: `${ctx.palette.primary.main}`,
  },
  chat_link: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flex: "2",
  },
  chat_item: {
    color: "#1976d2",
    marginBottom: "5px",
    padding: "15px",
    border: `1px solid ${ctx.palette.primary.main}`,
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
  },
  clearIcon: {
    cursor: "pointer",
    marginLeft: "5px",
  },
}));
