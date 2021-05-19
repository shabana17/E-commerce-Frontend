import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import { Label } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import store from '../redux/store/store';
import { SIGNUP } from '../redux/actions/actions';
import CardMedia from '@material-ui/core/CardMedia';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import API from './baseurl';
//import ChangePassword from './changePassword';
const styles = theme => ({
    box: {
        borderRadius: '2%',
        boxShadow: '2px 2px solid black',
        backgroundColor: '#5da1b0',
        padding: '2px',
        margin: '10px'

    },
    paper: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white'
    },

    form: {
        width: '100%',
        marginTop: theme.spacing(1),

    },

    submit: {
        color: '#5da1b0',
        backgroundColor: 'white',
        margin: theme.spacing(3, 0, 2),
    },
});

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id:this.props.signup._id,           
            username: this.props.signup.username,
            email: this.props.signup.email,
            password: this.props.signup.password,
           location: this.props.signup.location,
            country: '',
            image: '',
           // open:false
        }
    }
componentDidMount(){
    // API.get('/user/my-profile', {
    //     headers: {
    //         'Authorization': localStorage.getItem('tokens'),
    //         'Content-Type': 'application/json'
    //       }
    //   })
    //     .then(response=> {
    //       console.log(localStorage.getItem('tokens'));
    //       store.dispatch({
    //         type: SIGNUP,
    //         payload: response.data
    //       })
    //     }).catch(err => {
    //       alert(err)
    //     })
    }

    images(event) {
        if (event.target.files.length > 0) {
            const im = URL.createObjectURL(event.target.files[0])
            this.setState({
                image: im
            })
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
    states = (event) => {
        this.setState({
            location: event.target.value
        })

    }
    country = (event) => {
        this.setState({
            country: event.target.value
        })
    }
    profile = (event) => {
        event.preventDefault();
        // API.put(`/user/edit-profile/${this.state._id}`, this.state, {
        
        // })
        //     .then(res => {
        //         console.log(res.data);
        //        }).catch(err => {
        //         alert(err)
        //     })
        alert(`username: ${this.state.username}, email: ${this.state.email}, password: ${this.state.password}, state: ${this.state.location}, country:${this.state.country}`)
        store.dispatch({
            type: SIGNUP,
            payload: { username: this.state.username, email: this.state.email, password: this.state.password, state: this.state.location }

        })
    }

// handleClose=()=>{
//     this.setState({
//         open:false
//     })
// }
    render() {

        const { classes } = this.props;
        return (

            <Container component="main" maxWidth="xs">
                <Box className={classes.box} >
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Typography style={{ color: 'white' }} component="h1" variant="h5">
                            Edit Profile
                        </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container>
                                <Grid item sm={12} md={12}>
                                        <img src={this.state.image} style={{ textAlign: 'center', marginLeft: '110px', height: '150px', width: '150px' }} ></img><br />
                                        <br />
                                        <div style={{textAlign:'center'}}>
                                    <Button
                                        component="label"
                                        variant="contained"
                                        style={{color:'white',backgroundColor:'black'}}>
                                        Edit Profile Pic
                                       <input type="file" hidden accept="image/*" onChange={this.images.bind(this)} />
                                    </Button>
                                    </div>
                                </Grid>

                                <Grid container>
                                    <Grid item sm={12} md={6}>
                                        <TextField className={classes.text} style={{ margin: '10px', padding: '10px' }}

                                            margin="normal"
                                            required
                                            fullWidth
                                            name="username"
                                            label="Username"
                                            type="text"
                                            id="username"
                                            autoComplete="username"
                                            value={this.state.username}
                                            onChange={this.username}
                                        />
                                    </Grid>
                                    <Grid item sm={12} md={6}>
                                        <TextField className={classes.text} style={{ margin: '10px', padding: '10px' }}

                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            value={this.state.email}
                                            onChange={this.email}
                                            disabled
                                        />
                                    </Grid>
                                    <Grid item sm={12} md={6}>
                                        <TextField className={classes.text} style={{ margin: '10px', padding: '10px' }}

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
                                    </Grid>
                                    <Grid item sm={12} md={6}>
                                        <TextField className={classes.text} style={{ margin: '10px', padding: '10px' }}

                                            margin="normal"
                                            required
                                            fullWidth
                                            name="state"
                                            label="state"
                                            type="text"
                                            id="state"
                                            autoComplete="state"
                                            value={this.state.location}
                                            onChange={this.states}
                                        />
                                    </Grid>
                                    <Grid item sm={12} md={6}>
                                        <TextField className={classes.text} style={{ margin: '10px', padding: '10px' }}

                                            margin="normal"
                                            required
                                            fullWidth
                                            name="country"
                                            label="country"
                                            type="text"
                                            id="country"
                                            autoComplete="country"
                                            value={this.state.country}
                                            onChange={this.country}
                                        />
                                    </Grid>
                                    <Button style={{ margin: '20px' }}
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="#2b4240"
                                        className={classes.submit}
                                        onClick={this.profile}
                                    >
                                        Edit Profile
          </Button>
          {/* <Button style={{ margin: '20px' }}
                                        type="button"
                                        fullWidth
                                        variant="contained"
                                        color="#2b4240"
                                        
                                        onClick={()=>this.setState({open:true})}
                                    >
                                        Change Password
          </Button> */}
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Box>
                {/* <ChangePassword open={this.state.open} password={this.state.password} close={this.handleClose} /> */}
            </Container>

        );
    }
}
function mapStateToProps(state) {
    return {
        signup: state.signup,
    }
}
export default withStyles(styles, { withTheme: true })(connect(mapStateToProps, {})(withRouter(Profile)));
