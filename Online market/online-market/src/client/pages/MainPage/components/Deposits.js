import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import useStyles from "../styles/TabPanelStyle";
import Title from "./Title";
import FormDialogBuy from "../components/FormDialogBuy";

export default function Deposits(props) {
  const materialsData = props.materialsData;
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  return (
    <React.Fragment>
      <Grid item className={classes.operationsBox}>
        <Paper className={fixedHeightPaper}>
          <Title>{materialsData.material}</Title>
          <Typography component="p" variant="h4">
            Price: {materialsData.price}$
          </Typography>
          <Typography color="textSecondary" flex="1">
            on {new Date().toLocaleString()}
          </Typography>
          <div>
            <FormDialogBuy material={materialsData.material} price={materialsData.price}/>
          </div>
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
