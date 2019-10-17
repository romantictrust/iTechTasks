import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Snackbar from "../../../shared/components/Snackbars";

export default function FormDialogSell(props) {
  const [open, setOpen] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState();
  const {
    userData,
    data,
    profit,
    material,
    materialIndex,
    setUsersData,
    setProfitData,
    setPaymentOperation
  } = props;

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

  const handleSell = () => {
    setSnack();
    const materialPosition = materialIndex;
    const userMaterial = userData.materials[materialPosition];
    const fieldValue = Number(FormDialogSell.amount.value);
    const summaryCost = Number(
      (userMaterial.cost * fieldValue).toFixed(1)
    );
    const modifiedUser = { ...userData };
    const modifiedProfit = { ...profit };
    let operationValue = 0;
    if (fieldValue <= 0) {
      setOpen(false);
      setSnack({ notification: "Please enter correct amount" });
    } else if (userMaterial.amount < fieldValue) {
      setOpen(false);
      setSnack({
        notification: `You dont have ${fieldValue} ${material}`
      });
    } else {
      modifiedUser.materials[materialPosition].amount -= fieldValue;
      operationValue =
        fieldValue *
        (data[materialPosition].price -
          modifiedUser.materials[materialPosition].cost);
      operationValue = Number(operationValue.toFixed(1));
      modifiedProfit.total += operationValue;
      modifiedProfit.total = Number(modifiedProfit.total.toFixed(1));
      modifiedUser.balance += summaryCost;
      modifiedProfit.materials[materialPosition].profit += operationValue;
      modifiedProfit.materials[materialPosition].profit = Number(
        modifiedProfit.materials[materialPosition].profit
      );
      const paymentOperation = {
        index: userData.orders[0] ? userData.orders.length : 0,
        flag: "sell",
        material: userMaterial.material,
        amount: fieldValue,
        price: summaryCost,
        date: new Date().toLocaleString()
      };
      modifiedUser.orders.push(paymentOperation);
      setUsersData(modifiedUser);
      setProfitData(modifiedProfit);
      setPaymentOperation(paymentOperation);
      setOpen(false);
    }
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Sell {material}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sell materials</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter amount of the {material} to sell.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="amount"
            label={`${material} amount`}
            type="number"
            fullWidth
            inputRef={el => {
              FormDialogSell.amount = el;
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSell} color="primary">
            Sell {material}
          </Button>
        </DialogActions>
      </Dialog>
      {snackMessage ? <Snackbar message={snackMessage} /> : null}
    </div>
  );
}
