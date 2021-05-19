import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
export default function SizeAlert(props) {
  return (
    <div >
      <Dialog open={props.open} onClose={props.close}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please Select Size
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
