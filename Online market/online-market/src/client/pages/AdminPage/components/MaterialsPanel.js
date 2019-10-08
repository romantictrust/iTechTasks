import React from "react";
import useStyles from "../styles/AdminPageStyle";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import Title from "../../../basicComponents/components/Title";
import MaterialsDialogWindow from "../components/MaterialsDialogWindow";

export default function MaterialsPanel(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const materialData = props.material;
  return (
    <React.Fragment>
      <Grid item className={classes.operationsBox}>
        <Paper className={fixedHeightPaper}>
          <Title>{materialData.material}</Title>
          <Typography component="p" variant="h4">
            Price: {materialData.price}$
          </Typography>
          <Typography color="textSecondary" flex="1">
            on {materialData.date}
          </Typography>
          <MaterialsDialogWindow
            admin={props.admin}
            material={materialData.material}
            data={props.data}
            index={props.index}
          />
        </Paper>
      </Grid>
    </React.Fragment>
  );
}
