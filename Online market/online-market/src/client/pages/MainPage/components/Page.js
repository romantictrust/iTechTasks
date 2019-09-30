import React from "react";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import useStyles from "../styles/TabPanelStyle";
import ActivitiesContainer from "../containers/ActivitiesContainer";
import OperationsContainer from "../containers/OperationsContainer";
import OrdersContainer from "../containers/OrdersContainer";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function applyProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <Grid container className={classes.root}>
      <Container maxWidth="md" fixed>
        <AppBar position="static">
          <Tabs
            variant="fullWidth"
            value={value}
            onChange={handleChange}
            aria-label="nav tabs example"
          >
            <LinkTab label="Operations" href="/operations" {...applyProps(0)} />
            <LinkTab label="Archive" href="/archive" {...applyProps(1)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <OperationsContainer/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <OrdersContainer/>
        </TabPanel>
      </Container>
      <Container maxWidth="sm">
        <ActivitiesContainer />
      </Container>
    </Grid>
  );
}
