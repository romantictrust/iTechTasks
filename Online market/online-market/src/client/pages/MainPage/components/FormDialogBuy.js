import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '../../../basicComponents/components/Snackbars';

export default function FormDialogBuy(props) {
  const [open, setOpen] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSell = () => {
    setSnackMessage();
    const fieldValue = Number(FormDialogBuy.amount.value);
    const balance = Number(props.userData.balance);
    const summaryCost = fieldValue * props.price;
    const modifiedUser = { ...props.userData };
    if (fieldValue <= 0) {
      setSnackMessage({ notification: 'Please enter correct amount' });
      throw Error('Please enter correct amount');
    } else if (balance < summaryCost) {
      setSnackMessage({
        notification: `You dont have ${summaryCost} on your account`,
      });
      throw Error(`You dont have ${summaryCost} on your account`);
    } else {
      modifiedUser.balance -= summaryCost;
      modifiedUser.balance = Number(modifiedUser.balance.toFixed(1));
      modifiedUser.materials[props.materialIndex].amount += fieldValue;
      const paymentOperation = {
        index: props.userData.orders[0] ? props.userData.orders.length : 0,
        flag: 'buy',
        material: props.material,
        amount: fieldValue,
        price: summaryCost,
        date: new Date().toLocaleString(),
      };
      modifiedUser.orders.push(paymentOperation);
      props.setUsersData(modifiedUser);
      props.setPaymentOperation(paymentOperation);
      props.setUsersData(modifiedUser);
      setOpen(false);
    }
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Buy
        {' '}
        {props.material}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Buy materials</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter amount of the
            {' '}
            {props.material}
            {' '}
to Buy.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="amount"
            label={`${props.material} amount`}
            type="number"
            fullWidth
            inputRef={(el) => {
              FormDialogBuy.amount = el;
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSell} color="primary">
            Buy
            {' '}
            {props.material}
          </Button>
        </DialogActions>
      </Dialog>
      {snackMessage ? <Snackbar message={snackMessage} /> : null}
    </div>
  );
}
