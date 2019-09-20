import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styles/AuthPageStyles";

export default function SignIn() {
  const emailReg = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const passRef = new RegExp(/^(?=.*\d)[0-9a-zA-Z]{8,}$/);
  //   (?=.*\d)          // should contain at least one digit
  //   (?=.*[a-z])       // should contain at least one lower case
  //   (?=.*[A-Z])       // should contain at least one upper case
  //   [a-zA-Z0-9]{8,}   // should contain at least 8 from the mentioned characters

  const classes = useStyles();

  const confirmAuth = event => {
    event.preventDefault();
    // const email = SignIn.email.value;
    // const password = SignIn.password.value;
    // validateEmail(email);
    // validatePassword(password);
  };

  function validateEmail(email) {
    if (!emailReg.test(email)) {
      alert("Wrong email");
      throw new Error(`Invalid email`);
    }
  }

  function validatePassword(password) {
    if (!passRef.test(password)) {
      alert("Wrong password");
      throw new Error(`Invalid password`);
    }
  }

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
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
