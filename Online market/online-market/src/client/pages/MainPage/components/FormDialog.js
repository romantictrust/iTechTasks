import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function FormDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSell = () => {
    let userMaterial = { material: "", amount: 0, cost: 0 };
    let counter = 0;
    let materialPosition = 0;
    let fieldValue = Number(FormDialog.amount.value);
    let modifiedUser = {};
    let modifiedProfit = {};
    let operationValue = 0;
    Object.assign(modifiedUser, props.userData);
    Object.assign(modifiedProfit, props.profit);
    for (let arr of props.userData.materials) {
      if (arr.material === props.material) {
        userMaterial.material = arr.material;
        userMaterial.amount = arr.amount;
        userMaterial.cost = arr.cost;
        materialPosition = counter;
      }
      counter++;
    }
    if (fieldValue <= 0) {
      alert(`Please enter correct amount`);
      throw Error(`Please enter correct amount`);
    } else if (userMaterial.amount < fieldValue) {
      alert(`You dont have ${fieldValue} of ${props.material}`);
      throw Error(`You dont have ${fieldValue} of ${props.material}`);
    } else {
      modifiedUser.materials[materialPosition].amount -= fieldValue;
      operationValue =
        fieldValue *
        (props.data[materialPosition].price -
          modifiedUser.materials[materialPosition].cost);
      operationValue = Number(operationValue.toFixed(1));
      modifiedProfit.total += operationValue;
      modifiedProfit.total = Number(modifiedProfit.total.toFixed(1));
      modifiedUser.balance += modifiedProfit.total;
      modifiedProfit.materials[materialPosition].profit += operationValue;
      modifiedProfit.materials[materialPosition].profit = Number(
        modifiedProfit.materials[materialPosition].profit
      );
      props.setUsersData(modifiedUser);
      props.setProfitData(modifiedProfit);
      setOpen(false);
    }
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Sell {props.material}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Sell materials</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter amount of the {props.material} to sell.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="amount"
            label={`${props.material} amount`}
            type="number"
            fullWidth
            inputRef={el => {
              FormDialog.amount = el;
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSell} color="primary">
            Sell {props.material}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}