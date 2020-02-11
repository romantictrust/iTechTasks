import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import useStyles from "../styles/TabPanelStyle";
import Title from "../../../shared/components/Title";

export default function Activities(props) {
  const classes = useStyles();
  const { payment } = props;
  return (
    <Paper className={classes.paper}>
      <Title>Recent Activities</Title>
      {payment.map(item => (
        <Typography component="p" key={item.index}>
          {item.amount} items of {item.material} were {item.flag}
        </Typography>
      ))}
    </Paper>
  );
}
