import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Link, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styles/AuthPageStyles";
import { loginUserUrl } from "../../constants";
import {
  validateEmail,
  validatePassword
} from "../../basicComponents/functions/Validate";

function SignIn(props) {
  const loginUser = user => {
    return fetch(loginUserUrl, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(response =>
        sessionStorage.setItem("user", JSON.stringify(response.user))
      )
      .catch(error => {
        throw new Error("Wrong user");
      });
  };

  const classes = useStyles();

  const confirmAuth = async event => {
    event.preventDefault();
    const email = SignIn.email.value;
    const password = SignIn.password.value;
    validateEmail(email);
    validatePassword(password);
    const user = { user: { email: email, password: password } };
    await loginUser(user);
    props.history.replace("/");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form
          className={classes.form}
          onSubmit={confirmAuth}
          autoComplete="off"
          noValidate
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoFocus
            inputRef={el => {
              SignIn.email = el;
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            inputRef={el => {
              SignIn.password = el;
            }}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
              <Link
                to="/registration"
                style={{ textDecoration: "none", color: "purple" }}
              >
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
export default withRouter(SignIn);
