import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import LoyaltyIcon from '@material-ui/icons/Loyalty'
import store from '../redux/store/store';
import { ADD_TO_BAG, INC, DEC, WISHLIST, XS, S, M, L, XL } from '../redux/actions/actions';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import BreadCrumbs from './breadCrumbs'
import LoginAlert from './loginAlert'
import SizeAlert from './sizeAlert'
import API from './baseurl'
class DetailsFurniture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            _id: '',
            title: '',
            image: '',
            description: '',
            price: '',
            size: '',
            quant: 1,
            open: false,
            opensize: false
        }
    }
    componentDidMount() {
        let details = this.props.furniture.filter(fur => fur._id === this.props.match.params.furnitureId)
        this.setState({
            _id: details[0]._id,
            image: details[0].image,
            price: details[0].price,
            size: details[0].size,
            description: details[0].description,
            title: details[0].title,
        })
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.match.params.furnitureId != prevProps.match.params.furnitureId || this.props.fur != prevProps.fur) {
            let details = this.props.furniture.filter(fur => fur._id === this.props.match.params.furnitureId)
            this.setState({
                _id: details[0]._id,
                image: details[0].image,
                price: details[0].price,
                size: details[0].size,
                description: details[0].description,
                title: details[0].title,
            })
        }
    }
    handleIncrement = () => {
        this.setState(state => ({ quant: state.quant + 1 }));

    };

    handleDecrement = () => {
        this.setState(state => ({ quant: state.quant - 1 }));

    };
    handleClose = () => {
        this.setState({
            open: false
        })
    }
    handleSizeclose = () => {
        this.setState({
            opensize: false
        })
    }
    render() {
        return (
            <>
                <BreadCrumbs />

                <div style={{ flexGrow: '1' }}>
                    <Paper style={{
                        paddingLeft: '94px',
                        margin: 'auto',
                        maxWidth: '500',
                    }}>
                        <Grid container spacing={3}>
                            <Grid item >

                                <img style={{
                                    width: '390px',
                                    height: '550px',
                                    display: 'block',
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                }} alt="complex" src={this.state.image} />

                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs={10} direction="column" spacing={3}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            <h1> <b><i style={{ color: 'black' }}>{this.state.title}</i></b></h1>
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            <h5> <i style={{ color: 'grey' }}>{this.state.description}</i></h5>

                                        </Typography>

                                    </Grid>
                                    <hr />

                                    <Grid item>
                                        <h6><b>Select Size:</b></h6>


                                        <Button style={{ borderRadius: '55%', boxShadow: '2px 2px solid black', border: '2px solid grey' }} onClick={() => { this.setState({ size: 'Xtra Small' }) }}>XS</Button>
                                        <Button style={{ borderRadius: '55%', boxShadow: '2px 2px solid black', border: '2px solid grey', marginLeft: '6px' }} onClick={() => { this.setState({ size: 'Small' }) }}>S</Button>
                                        <Button style={{ borderRadius: '55%', boxShadow: '2px 2px solid black', border: '2px solid grey', marginLeft: '6px' }} onClick={() => { this.setState({ size: 'Medium' }) }}>M</Button>
                                        <Button style={{ borderRadius: '55%', boxShadow: '2px 2px solid black', border: '2px solid grey', marginLeft: '6px' }} onClick={() => { this.setState({ size: 'Large' }) }}>L</Button>
                                        <Button style={{ borderRadius: '55%', boxShadow: '2px 2px solid black', border: '2px solid grey', marginLeft: '6px' }} onClick={() => { this.setState({ size: 'Xtra Large' }) }}>XL</Button>

                                    </Grid>
                                    <br />
                                    <Grid item>
                                        <h6><b>Qunatity:</b></h6>
                                        <ButtonGroup aria-label="outlined button group">
                                            <Button onClick={this.handleDecrement}>-</Button>
                                            <Button >{this.state.quant}</Button>
                                            <Button onClick={this.handleIncrement}>+</Button>
                                        </ButtonGroup>
                                    </Grid>

                                    <br />
                                    <Grid item>
                                        <Typography variant="subtitle1"><h6 style={{ color: 'grey', fontSize: '20px' }}>Rs:{this.state.price}</h6></Typography>

                                    </Grid>
                                    <hr />
                                    <Grid item>
                                        <Button style={{ color: 'white', backgroundColor: 'red', textAlign: 'center' }} onClick={() => {
                                            //       if (!localStorage.getItem('token')) {
                                            //         this.setState({
                                            //         open:true
                                            //     })
                                            // }
                                            // else if (!this.state.size){
                                            //   this.setState({
                                            //       opensize:true
                                            //   })

                                            // }
                                            //     else {                                        
                                            //         const pr={id:this.state.id,image:this.state.image,title:this.state.title,description:this.state.description,size:this.state.size,price:this.state.price,quant:this.state.quant,total:this.state.quant*this.state.price}
                                            //         store.dispatch({
                                            //             type: ADD_TO_BAG,
                                            //             payload:pr
                                            //         })
                                            //     }
                                            const prs = { userId: "609fca1769062014bcc38c7a", productId: this.state._id, size: this.state.size, quant: this.state.quant,image:this.state.image,title:this.state.title,price:this.state.price,total: this.state.quant * this.state.price }
                                            API.post('/add-to-cart/create-cart', prs, {})
                                                .then(response => {
                                                    console.log('response of signup', response);
                                                    alert(response)
                                                }).catch(err => {
                                                    console.log(err)
                                                    alert(err)
                                                })
                                            store.dispatch({
                                                type: ADD_TO_BAG,
                                                payload: prs
                                            })
                                        }}>
                                            < LocalMallIcon />    Add To bag
                                    </Button>
                                        <Button style={{ color: 'black', backgroundColor: 'white', textAlign: 'center', border: '1px solid black', marginLeft: '10px' }} onClick={() => {
                                            //        if (!localStorage.getItem('token')) {
                                            //         this.setState({
                                            //         open:true
                                            //     })
                                            // }
                                            // else if (!this.state.size){
                                            //   this.setState({
                                            //       opensize:true
                                            //   })
                                            //             }
                                            //             else {
                                            //                 const pr={id:this.state.id,image:this.state.image,title:this.state.title,description:this.state.description,size:this.state.size,price:this.state.price,quant:this.state.quant,total:this.state.quant*this.state.price}
                                            //                 store.dispatch({
                                            //                     type: WISHLIST,
                                            //                     payload:pr
                                            //                 })
                                            //             }
                                            const prs = { userId: "609fca1769062014bcc38c7a", productId: this.state._id, size: this.state.size, quant: this.state.quant,image:this.state.image,title:this.state.title,price:this.state.price,total: this.state.quant * this.state.price }
                                        
                                             API.post('/wishlist/create-wishlist', prs, {})
                                                .then(response => {
                                                    console.log('response of signup', response);
                                                    alert(response)
                                                }).catch(err => {
                                                    console.log(err)
                                                    alert(err)
                                                })
                                            const pr = { userId: "609fca1769062014bcc38c7a", productId: this.state.productId, image: this.state.image, title: this.state.title, description: this.state.description, size: this.state.size, price: this.state.price, quant: this.state.quant, total: this.state.quant * this.state.price }

                                            store.dispatch({
                                                type: WISHLIST,
                                                payload: prs
                                            })
                                        }}>
                                            <LoyaltyIcon /> WishList
                                    </Button>

                                        <LoginAlert open={this.state.open} close={this.handleClose} />
                                        <SizeAlert open={this.state.opensize} close={this.handleSizeclose} />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                </div>
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        furniture: state.furniture,
    }
}
export default (connect(mapStateToProps, {})(withRouter(DetailsFurniture)));



