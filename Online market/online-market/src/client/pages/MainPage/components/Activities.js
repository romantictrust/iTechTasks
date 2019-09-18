import React from 'react'
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/TabPanelStyle";

export default function Activities(){
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
          <Typography color="textSecondary" className={classes.depositContext}>
            Recent Activities
          </Typography>
          <Typography component="p">56 items of oil were sold</Typography>
        </Paper>
    )
}