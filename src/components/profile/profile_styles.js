import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((ctx) => ({
  profileContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
  },
  genderForm: {
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
  fab: {
    marginTop: "15px !important",
    paddingRight: "20px !important",
  },
}));
