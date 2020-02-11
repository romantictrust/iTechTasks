import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Typography from "@material-ui/core/Typography";
import Snackbar from "../../../shared/components/Snackbars";

export default function FormDialogRecharge(props) {
  const [open, setOpen] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState();
  const { user, setUsersData } = props;

  const setSnack = (message) => {
    Promise.resolve().then(() => {
      setSnackMessage(message);
    });
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRecharge = () => {
    setSnack();
    const fieldValue = Number(FormDialogRecharge.money.value);
    const modifiedUser = { ...user };
    if (fieldValue <= 0) {
      setSnack({ notification: "Please enter correct amount" });
      throw Error("Please enter correct amount");
    } else if (fieldValue > 1000) {
      setSnack({
        notification:
          "Sorry, but you can recharge balance only on 1000$ maximim at one time"
      });
      throw Error("Please enter correct amount");
    } else {
      modifiedUser.balance += fieldValue;
      modifiedUser.balance = Number(modifiedUser.balance.toFixed(1));
      setUsersData(modifiedUser);
      handleClose();
      setSnack({ notification: `${fieldValue}$ added to your account` });
    }
  };

  return (
    <div>
      <Button color="secondary" onClick={handleClickOpen} disableRipple>
        <Typography>{user.balance} $</Typography>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Recharge balance</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To recharge your balance please enter amount of money you want to
            recharge.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="money"
            label="Money"
            type="number"
            fullWidth
            inputRef={el => {
              FormDialogRecharge.money = el;
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRecharge} color="primary">
            Recharge
          </Button>
        </DialogActions>
      </Dialog>
      {snackMessage ? <Snackbar message={snackMessage} /> : null}
    </div>
  );
}
