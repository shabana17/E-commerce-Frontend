import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { useHistory } from 'react-router';
export default function LoginAlert(props) {
  const history = useHistory()
  const redirectLogin = () => {
    history.push('/login')
  }
  return (
    <div >
      <Dialog open={props.open} onClose={props.close}
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Please Login First
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={redirectLogin} color="primary">
            Login
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}
