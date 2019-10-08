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
  operationBoxWrap: {
    direction: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  operationsBox: {
    marginTop: "1em",
    marginBottom: "1em"
  },
}));
export default useStyles;