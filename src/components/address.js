import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import store from '../redux/store/store';
import { ADDRESS } from '../redux/actions/actions'
import API from './baseurl';
import { withStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
});
class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      st: '',
      zip: '',
      country: '',
    }
  }
  handle(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    })
  }
  submitadd(event) {
    event.preventDefault();
    API.post('/checkout/shipping-address/create-shipping-data', this.state, {})
      .then(res => {
        console.log('response', res);

      }).catch(err => {
        console.log(err)
        alert(err)
      })
    store.dispatch({
      type: ADDRESS,
      payload: { first: this.state.firstName, last: this.state.lastName, address1: this.state.address1, address2: this.state.address2, city: this.state.city, zip: this.state.zip, st: this.state.st, country: this.state.country }
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography variant="h6" gutterBottom>
              Shipping address
      </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First name"
                  fullWidth
                  onChange={this.handle.bind(this)}
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last name"
                  fullWidth
                  onChange={this.handle.bind(this)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address1"
                  name="address1"
                  label="Address line 1"
                  onChange={this.handle.bind(this)}
                  fullWidth
                  autoComplete="shipping address-line1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="address2"
                  name="address2"
                  label="Address line 2"
                  fullWidth
                  onChange={this.handle.bind(this)}
                  autoComplete="shipping address-line2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  onChange={this.handle.bind(this)}
                  autoComplete="shipping address-level2"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField id="st" name="st" label="State/Province/Region" onChange={this.handle.bind(this)} fullWidth />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="zip"
                  name="zip"
                  label="Zip / Postal code"
                  fullWidth
                  onChange={this.handle.bind(this)}
                  autoComplete="shipping postal-code"
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  id="country"
                  name="country"
                  label="Country"
                  fullWidth
                  onChange={this.handle.bind(this)}
                  autoComplete="shipping country"
                />
                <Link to={{ pathname: '/review' }} style={{ textDecoration: 'none' }}>
                  <Button
                    style={{
                      color: 'white', position: 'fixed', backgroundColor: 'red',
                      bottom: '7%',
                      right: '3%',
                    }}>
                    Next
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}
export default withStyles(styles, { withTheme: true })(AddressForm);