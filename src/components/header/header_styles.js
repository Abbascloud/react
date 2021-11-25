import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  wrapper: {
    height: "100px",
    position: "static !important",
    padding: "15px",
    display: "flex",
    flexDirection: "row !important",
    alignItems: "center",
    justifyContent: "space-between",
  },
  link: {
    textDecoration: "none",
    color: "white",
    cursor: "pointer",
    widht: "20%",
    display: "block",
    fontSize: "40px",
  },
}));
