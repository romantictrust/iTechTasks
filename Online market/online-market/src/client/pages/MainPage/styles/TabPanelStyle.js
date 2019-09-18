import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      direction: "row",
      justify: "space-evenly",
      alignItems: "center"
    },
    tabPannelRoot: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column"
    }
  }));
  export default useStyles;