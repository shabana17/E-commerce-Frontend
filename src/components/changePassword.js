// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import CardMedia from '@material-ui/core/CardMedia';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Grid from '@material-ui/core/Grid';
// import { useDispatch } from 'react-redux';
// import { SIGNUP } from '../redux/actions/actions';
//  const useStyles = makeStyles((theme) => ({
//     root: {
//       height: '60vh',
//       margin:"20px"
//     },
    
//     form: {
//       width: '100%', 
//       marginTop: theme.spacing(1),
//     },

//   }));
//   function  handleClose(){
//     dispatch({
//         type:SIGNUP,
//         payload:{password:setPassword}
//     })
//     alert(setPassword)
//     props.close
// }
// function ChangePassword(props) {
//     const [password,setPassword]=React.useState('')
//       const classes = useStyles();
//       const dispatch=useDispatch();
//       function  handleClose(){
//         dispatch({
//             type:SIGNUP,
//             payload:{password:setPassword()}
//         })
//         alert(setPassword())
//         props.close
//     }
//     return (
//         <div>
//   <Dialog open={props.open} onClose={props.close} >
      
  
//     <Typography component="h1" variant="h5" >
//             Change Password
//            </Typography>
  
//   <DialogContent>
 
//     <form className={classes.form} noValidate>
//             <TextField
//               variant="standard"
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Current Password"
//               name="text"
//               autoComplete="email"
//               autoFocus
//               onChange={(event)=>{setPassword(event.target.value)}}
//             />
//              <TextField
//               variant="standard"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="New Paasword"
//               type="text"
//               id="password"
//               autoComplete="current-password"
//               onChange={(event)=>{setPassword(event.target.value)}}
//             />
//                   <TextField
//               variant="standard"
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Confirm Password"
//               type="text"
//               id="password"
//               autoComplete="current-password"
//               onChange={(event)=>{setPassword(event.target.value)}}
//             />           
//           </form>
//   </DialogContent>
//   <DialogActions>
//     <Button variant="contained" onClick={handleClose} color="primary">
//       Change Password
//     </Button>
//       </DialogActions>
// </Dialog>
//         </div>
//     )
// }

// export default ChangePassword;

