import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Snackbar from '../../../basicComponents/components/Snackbars';

export default function FormDialogSell(props) {
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
    const materialPosition = props.materialIndex;
    const userMaterial = props.userData.materials[materialPosition];
    const fieldValue = Number(FormDialogSell.amount.value);
    const summaryCost = props.data[materialPosition].price * fieldValue;
    const modifiedUser = { ...props.userData };
    const modifiedProfit = { ...props.profit };
    let operationValue = 0;
    if (fieldValue <= 0) {
      setSnackMessage({ notification: 'Please enter correct amount' });
      throw Error('Please enter correct amount');
    } else if (userMaterial.amount < fieldValue) {
      setSnackMessage({
        notification: `You dont have ${fieldValue} ${props.material}`,
      });
      throw Error(`You dont have ${fieldValue} of ${props.material}`);
    } else {
      modifiedUser.materials[materialPosition].amount -= fieldValue;
      operationValue = fieldValue
        * (props.data[materialPosition].price
          - modifiedUser.materials[materialPosition].cost);
      operationValue = Number(operationValue.toFixed(1));
      modifiedProfit.total += operationValue;
      modifiedProfit.total = Number(modifiedProfit.total.toFixed(1));
      modifiedUser.balance += modifiedProfit.total;
      modifiedUser.balance = Number(modifiedUser.balance.toFixed(1));
      modifiedProfit.materials[materialPosition].profit += operationValue;
      modifiedProfit.materials[materialPosition].profit = Number(
        modifiedProfit.materials[materialPosition].profit,
      );
      const paymentOperation = {
        index: props.userData.orders[0]
          ? props.userData.orders.length
          : 0,
        flag: 'sell',
        material: userMaterial.material,
        amount: fieldValue,
        price: summaryCost,
        date: new Date().toLocaleString(),
      };
      modifiedUser.orders.push(paymentOperation);
      props.setUsersData(modifiedUser);
      props.setProfitData(modifiedProfit);
      props.setPaymentOperation(paymentOperation);
      setOpen(false);
    }
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Sell
        {' '}
        {props.material}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sell materials</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter amount of the
            {' '}
            {props.material}
            {' '}
to sell.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="amount"
            label={`${props.material} amount`}
            type="number"
            fullWidth
            inputRef={(el) => {
              FormDialogSell.amount = el;
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSell} color="primary">
            Sell
            {' '}
            {props.material}
          </Button>
        </DialogActions>
      </Dialog>
      {snackMessage ? <Snackbar message={snackMessage} /> : null}
    </div>
  );
}
