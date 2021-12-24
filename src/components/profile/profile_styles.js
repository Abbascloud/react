import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  profileContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  UserForm: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  profileHeader: {
    color: `${ctx.palette.primary.main}`,
  },
  profileLink: {
    textDecoration: "none",
    color: `${ctx.palette.primary.main}`,
    fontSize: "35px",
  },
}));
