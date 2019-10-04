import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    direction: "row",
    justify: "space-evenly",
    alignItems: "center",
    marginTop: "4em"
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column"
  },
  operationsBox: {
    marginTop: "2em",
    marginBottom: "2em"
  }
}));
export default useStyles;