import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
    backgroundColor: "#ef9a9a"
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
    color: "#b71c1c"
  },
  footer: {
    padding: theme.spacing(2),
    marginTop: "auto",
    backgroundColor: "white"
  }
}));

function BlockPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          U'ra blocked, mate.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          I don't know why, but it's so ¯\_(ツ)_/¯
        </Typography>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">
            Anyway, you can <Link>contact us</Link> or continue using{" "}
            <Link to="/" style={{ textDecoration: "none", color: "purple" }}>
              test page
            </Link>{" "}
            test page.
          </Typography>
        </Container>
      </footer>
    </div>
  );
}
export default BlockPage;
