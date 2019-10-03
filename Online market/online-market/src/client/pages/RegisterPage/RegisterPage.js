import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styles/RegisterPageStyles";
import { registerUserUrl } from "../../constants";
import {
  validateEmail,
  validatePassword
} from "../../basicComponents/functions/Validate";
import Snackbar from "../../basicComponents/components/Snackbars";

export default function SignUp() {
  const [snackMessage, setSnackMessage] = React.useState();

  const registerUser = user => {
    return fetch(registerUserUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(res => res.json())
      .then(res => {
        if (res.errors){
          setSnackMessage({notification: res.errors});
        }
        else {
          setSnackMessage({notification: 'Please, confirm your email'});
        }
      })
  };
  const classes = useStyles();

  const confirmReg = event => {
    event.preventDefault();
    setSnackMessage();
    const email = SignUp.email.value;
    const password = SignUp.password.value;
    const firstName = SignUp.fname.value;
    const lastName = SignUp.lname.value;
    validateEmail(email);
    validatePassword(password);
    const user = {
      user: {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
      }
    };
    registerUser(user);
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form
          className={classes.form}
          onSubmit={confirmReg}
          autoComplete="off"
          noValidate
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                inputRef={el => {
                  SignUp.fname = el;
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                inputRef={el => {
                  SignUp.lname = el;
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                inputRef={el => {
                  SignUp.email = el;
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                inputRef={el => {
                  SignUp.password = el;
                }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link
                to="/authorization"
                style={{ textDecoration: "none", color: "purple" }}
              >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
        {snackMessage ? <Snackbar message={snackMessage} /> : null}
      </div>
    </Container>
  );
}
