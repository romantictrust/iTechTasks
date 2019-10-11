import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import useStyles from "../styles/AdminPageStyle";
import Title from "../../../basicComponents/components/Title";
import MaterialsDialogWindow from "./MaterialsDialogWindow";

export default function MaterialsPanel(props) {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const { admin, data, index, material } = props;
  const materialData = material;
  return (
    <>
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
            admin={admin}
            material={materialData.material}
            data={data}
            index={index}
          />
        </Paper>
      </Grid>
    </>
  );
}
