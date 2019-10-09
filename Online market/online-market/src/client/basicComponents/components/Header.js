import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import logo from '../../style/icons/logoIcon/logo.png';
import rechargeBalance from '../functions/rechargeBalance';

const useStyles = makeStyles(() => ({
  root: {
    direction: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: '60px',
    height: '60px',
  },
}));

function Header(props) {
  const { clearStorage, history, userData} = props;
  const classes = useStyles();
  const logOut = () => {
    sessionStorage.removeItem('user');
    clearStorage();
    history.replace('/authorization');
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Grid container className={classes.root}>
            <Grid item className={classes.root}>
              <Link to="/">
                <img className={classes.logo} src={logo} alt="Company Logo" />
              </Link>
            </Grid>
            {userData.email ? (
              <Grid item>
                <Button color="secondary" disableRipple onClick={rechargeBalance}>
                  <Typography>
                    {userData.balance}
$
                  </Typography>
                </Button>
                <Button color="inherit" disableRipple>
                  <Typography>{userData.email}</Typography>
                </Button>
                <Button color="inherit" disableRipple onClick={logOut}>
                  Log out
                </Button>
              </Grid>
            ) : (
              <Grid item>
                <Button color="inherit" disableRipple>
                  <Link
                    to="/authorization"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Login
                  </Link>
                </Button>
                <Button color="inherit" disableRipple>
                  <Link
                    to="/registration"
                    style={{ textDecoration: 'none', color: 'white' }}
                  >
                    Register
                  </Link>
                </Button>
              </Grid>
            )}
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withRouter(Header);
