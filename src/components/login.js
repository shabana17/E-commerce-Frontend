import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import API from './baseurl';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import InvalidUser from './invalidUser'

const styles = theme => ({
  box: {
    borderRadius: '2%',
    boxShadow: '2px 2px solid black',
    backgroundColor: '#5da1b0',
    margin: '20px',
    padding: '20px',
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    color: '#ffffff',

  },

  submit: {
    color: '#5da1b0',
    backgroundColor: 'white',
    margin: theme.spacing(3, 0, 2),
  },
});
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      open: false
    }

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
  handleClose = () => {
    this.setState({
      open: false
    })
  }
  submitLogin = (event) => {
    event.preventDefault();
    API.post('/auth/login', this.state, {})
      .then(response => {
        // if (localStorage.setItem('token', res.data.token)===undefined){
        //   localStorage.removeItem('token')
        // }
        // else{
        localStorage.setItem('token',response.data.data.userToken)
        // localStorage.setItem('username',response.data.username)
        // console.log(response.data.username)
        console.log(response.data.data.userToken)
      // }
      })
      .catch(err => {
        console.log(err)
        alert(err)
        this.setState({
        open: true
        })

      })
    // let set = JSON.parse(localStorage.getItem('token'))
    // if (set.email == this.state.email && set.password == this.state.password) {
    // }
    // else {
    //   this.setState({
    //     open: true
    //   })
    // }
  }
  render() {
    const { classes } = this.props;
    return (
      <>
        <Container component="main" maxWidth="xs">
          <Box className={classes.box} >
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography style={{ color: 'white' }} component="h1" variant="h5">
                Login
        </Typography>
              <form className={classes.form} noValidate>
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
                <TextField className={classes.text}

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

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="#2b4240"
                  className={classes.submit}
                  onClick={this.submitLogin}
                >
                  Login
          </Button>
                <Grid container>
                  <Grid item xs>

                  </Grid>
                  <Grid item>
                    <Link style={{ color: 'white' }} to={{ pathname: '/register' }} variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Box>
        </Container>
        <InvalidUser open={this.state.open} close={this.handleClose} />
      </>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Login);