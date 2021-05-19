import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {  useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
import { Button } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
const useStyles = makeStyles((theme) => ({
  listItem: {
    padding: theme.spacing(1, 0),
  },
  total: {
    fontWeight: 700,
  },
  title: {
    marginTop: theme.spacing(2),
  },
    table: {
      minWidth: 650,
    },
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
}));
const pay = token => {
      const body = {
        token
      }
      return fetch('http://localhost:3000/checkout/payment', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      }).then(res => {
        console.log("ressssss", res)
        const { status } = res
        console.log('ssss', status)
      })
        .catch(err => {
          console.log(err)
        })
    }

export default function Review() {
  const classes = useStyles();
  const len = useSelector(state => state.bag.products);

  let tt=useSelector(state=>state.bag.mul);
  let ad =useSelector(state=>state.address)
  console.log(tt)
  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
      <Paper className={classes.paper}>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>

      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Total</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {len.map((lens) => (
            <TableRow key={lens.id}>
              <TableCell component="th" scope="row">
                {lens.title}
              </TableCell>
              <TableCell align="right">{lens.size}</TableCell>
              <TableCell align="right">{lens.quant}</TableCell>
              <TableCell align="right">{lens.price}</TableCell>
               <TableCell align="right">{lens.total}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer> 
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Total</TableCell>
            <TableCell align="right">{tt}</TableCell>
          </TableRow>
        </TableHead>
      
        
      </Table>
    </TableContainer> 

     
      <hr />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom className={classes.title}>
            Shipping Address:
          </Typography>
          <Typography gutterBottom><h5><b>{ad.first} {ad.last}</b></h5></Typography>
          <Typography gutterBottom>{ad.address1}, {ad.address2}</Typography>
          <Typography gutterBottom>{ad.city}({ad.zip}),{ad.st}</Typography>
          <Typography>{ad.country}</Typography>
        </Grid>
     
           <StripeCheckout stripeKey="pk_test_51Ig2N0SGrPnX6m5QC7LwnfsgzMB72ldaekEhJEpPzWhSL8kW15Eef1lKi2igBAWYEkhqkvH7TUDJ6YPVuvcuW5Zw0025lRjvIC" token={pay} name='Make Payment' amount={tt*100}>
         <Button
                  style={{color:'white', position:'fixed',backgroundColor:'red',
                  bottom: '7%',
                  right: '3%',
                }}>
            Place Order
    </Button>
      </StripeCheckout>
      </Grid>
      </Paper>
     </main>
    </React.Fragment>
  );
}






  