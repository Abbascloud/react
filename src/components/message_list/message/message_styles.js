import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  userMessage: {
    width: "40%",
    marginLeft: "auto",
    textAlign: "left",
    border: "1px solid grey",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
  systemMessage: {
    width: "40%",
    marginRight: "auto",
    textAlign: "left",
    border: "1px solid grey",
    borderRadius: "10px",
    padding: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.5)",
  },
}));
