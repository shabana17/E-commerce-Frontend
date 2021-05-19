import { Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './components/home';
import Men from './components/men';
import Women from './components/women';
import Kids from './components/kids';
import Furniture from './components/furniture';
import Login from './components/login'
import Register from './components/register';
import Profile from './components/profile';
import { Component, useState } from 'react';
import Bag from './components/bag';
import DetailsMen from './components/detailsMen';
import DetailsWomen from './components/detailsWomen';
import DetailsKids from './components/detailsKids';
import DetailsFurniture from './components/detailsFurniture';
import Checkout from './components/checkout';
import Address from './components/address';
import Payment from './components/payment';
import Review from './components/review';
import Wishlist from './components/wishlist';
import BreadCrumbs from './components/breadCrumbs'
import StripeCheckout from 'react-stripe-checkout'
import API from './components/baseurl'
class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path='/' component={() => <Home />} />
          <Route exact path='/men' component={() => <Men />} />
          <Route exact path='/women' component={() => <Women />} />
          <Route exact path='/kids' component={() => <Kids />} />
          <Route exact path='/furnitures' component={() => <Furniture />} />
          <Route exact path='/login' component={() => <Login />} />
          <Route exact path='/register' component={() => <Register />} />
          <Route exact path='/profile' component={() => <Profile />} />
          <Route exact path='/men/details-men:mensId' component={() => <DetailsMen />} />
          <Route exact path='/women/details-women:womensId' component={() => <DetailsWomen />} />
          <Route exact path='/kids/details-kids:kidsId' component={() => <DetailsKids />} />
          <Route exact path='/furnitures/details-furnitures:furnitureId' component={() => <DetailsFurniture />} />
          <Route exact path='/wishlist' component={() => <Wishlist />} />
          <Route exact path='/bag' component={() => <Bag />} />
          <Route exact path='/bag/checkout' component={() => <Checkout />} />
          <Route exact path='/addressform' component={() => <Address />} />
          <Route exact path='/payment' component={() => <Payment />} />
          <Route exact path='/review' component={() => <Review />} />
        </Switch>


      </>
    );
  }
}
// function App() {
//   const [product, setProduct] = useState({
//     name: 'react',
//     price: 19,
//     productBy: "facebook"
//   })
//   const pay = token => {
//     const body = {
//       token,
//       product
//     }
//     return fetch('http://localhost:3000/checkout/payment', {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify(body)
//     }).then(res => {
//       console.log("ressssss", res)
//       const { status } = res
//       console.log('ssss', status)
//     })
//       .catch(err => {
//         console.log(err)
//       })
//   }
//   return (
//     <>
//       <StripeCheckout stripeKey="pk_test_51Ig2N0SGrPnX6m5QC7LwnfsgzMB72ldaekEhJEpPzWhSL8kW15Eef1lKi2igBAWYEkhqkvH7TUDJ6YPVuvcuW5Zw0025lRjvIC" token={pay} name='Make Payment' amount={product.price*100}>
//         <button className='btn-large'>Pay</button>
//       </StripeCheckout>
//     </>
//   )
// }
export default App;
