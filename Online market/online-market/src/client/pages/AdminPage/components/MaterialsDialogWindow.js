import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import socketIOClient from "socket.io-client";
import Snackbar from "../../../shared/components/Snackbars";
import updateMaterial from "../functions/updateMaterial";
import { domen } from "../../../constants";

const socket = socketIOClient(domen);

export default function MaterialsDialogWindow(props) {
  const [open, setOpen] = React.useState(false);
  const { data, index, material, admin } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [snackMessage, setSnackMessage] = React.useState();

  const setSnack = (message) => {
    Promise.resolve().then(() => {
      setSnackMessage(message);
    });
  }

  const handleSell = () => {
    setSnack();
    const fieldValue = Number(MaterialsDialogWindow.price.value);
    if (fieldValue <= 0) {
      setSnack({ notification: "Price must be positive" });
    } else {
      const modifiedData = [...data];
      modifiedData[index].price = fieldValue;
      modifiedData[index].date = new Date().toLocaleString();
      updateMaterial(admin, modifiedData[index]);
      socket.emit("updateMaterial", modifiedData);
      handleClose();
    }
  };

  return (
    <>
      <Button color="primary" onClick={handleClickOpen}>
        Change price
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Change price</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter price of the {material}.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="price"
            label={`${material} price`}
            type="number"
            fullWidth
            inputRef={el => {
              MaterialsDialogWindow.price = el;
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSell} color="primary">
            Change
          </Button>
        </DialogActions>
      </Dialog>
      {snackMessage ? <Snackbar message={snackMessage} /> : null}
    </>
  );
}
