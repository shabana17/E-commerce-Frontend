import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import API from './baseurl';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import AssignmentIndSharpIcon from '@material-ui/icons/AssignmentIndSharp';
import store from '../redux/store/store';
import { SIGNUP } from '../redux/actions/actions';
const styles = theme => ({
    box:{
        borderRadius: '2%',
        boxShadow:'2px 2px solid black',
      box:'black',
        margin:'20px',
        padding:'20px',
    },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color:'white'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
   
   
  },
 
  submit: {
      color:'white',
      backgroundColor:'#214163',
    margin: theme.spacing(3, 0, 2),
  },
});

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state={
            username:"",
            email:"",
            password:"",
            location:"",
           // image:''
        }
    }
    username = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    email = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    password = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    location = (event) => {
        this.setState({
            location: event.target.value
        })
    }
    submitRegister(event){
      event.preventDefault();
        API.post('/auth/signup', this.state, {})
            .then(res => {
                console.log('response of signup',res);
               
              //  window.location.href = '/login';
            }).catch(err => {
                console.log(err)
                alert(err)
            })
       store.dispatch({
      type:SIGNUP,
      payload:{username:this.state.username, email: this.state.email, password: this.state.password, state: this.state.location}
 })  
//  let set={email: this.state.email, password: this.state.password }
//  let username={username:this.state.username}
//  localStorage.setItem('token',JSON.stringify(set))
//  localStorage.setItem('username',this.state.username)
      }
    render(){
        const { classes } = this.props;
  
  return (
     
    <Container component="main" maxWidth="xs">
         <Box  className={classes.box} >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <AssignmentIndSharpIcon />
        </Avatar>
        <Typography  style={{color:'#214163'}}component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} noValidate>
        <TextField className={classes.text}
           
           margin="normal"
           required
           fullWidth
           id="name"
           label="Username"
           name="username"
           autoComplete="name"  
           value={this.state.username} 
            onChange={this.username}
           
         
         />
          <TextField className={classes.text}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"  
            value={this.state.email} 
            onChange={this.email}          
          />
          <TextField 
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"   
            value={this.state.password} 
            onChange={this.password}      
          />
             <TextField 
            margin="normal"
            required
            fullWidth
            name="location"
            label="state"
            type="text"
            id="state"
            autoComplete="state"
            value={this.state.location} 
            onChange={this.location} 
          />
         
    <Button
            type="submit"
            fullWidth
            variant="contained"
            color="#2b4240"
            className={classes.submit}
            
            onClick={this.submitRegister.bind(this)}
          >
            Sign Up
          </Button>
        
        </form>
      </div>
      </Box>
    </Container>
  
  );
}
}
export default withStyles(styles, { withTheme: true })(SignUp);
