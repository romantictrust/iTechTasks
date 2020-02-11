import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';

export default function SimpleSnackbar(props) {
  const [open, setOpen] = React.useState(true);

  // Pass props *Object in SimpleSnackbar! According to that schema!
  const defaultProps = { notification: '', button: '', onClick: () => {} };
  const modifiedProps = { ...defaultProps, ...props.message };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{modifiedProps.notification}</span>}
        action={[
          <Button
            key="undo"
            color="secondary"
            size="small"
            onClick={modifiedProps.onClick}
          >
            {modifiedProps.button}
          </Button>,
          <IconButton
            key="close"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
    </div>
  );
}
