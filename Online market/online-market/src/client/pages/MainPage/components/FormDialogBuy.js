import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialogBuy(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSell = () => {
    let fieldValue = Number(FormDialogBuy.amount.value);
    console.log(fieldValue)
    if (fieldValue <= 0) {
      alert(`Please enter correct amount`);
      throw Error(`Please enter correct amount`);
    } else if (0) {
      alert(`You dont have ${fieldValue} of ${props.material}`);
      throw Error(`You dont have ${fieldValue} of ${props.material}`);
    } else {
      setOpen(false);
    }
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Buy {props.material}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Buy materials</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter amount of the {props.material} to Buy.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="amount"
            label={`${props.material} amount`}
            type="number"
            fullWidth
            inputRef={el => {
              FormDialogBuy.amount = el;
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSell} color="primary">
            Buy {props.material}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
