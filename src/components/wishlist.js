import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import store from '../redux/store/store';
import { ADD_TO_BAG, REMOVE, WISHLIST } from '../redux/actions/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import BreadCrumbs from './breadCrumbs'
import { Remove } from '@material-ui/icons';
import API from './baseurl'
class Wishlist extends Component {
    constructor(props) {
        super(props);
        this.state={
            userId:this.props.wish.userId,
            productId: this.props.wish.productId,
            title:this.props.wish.title,
            image:this.props.wish.image,
            description:this.props.wish.description,
            price: this.props.wish.price,
            size: this.props.wish.size,
            quant: 1
        }
     }
  componentDidMount(){
    // API.get('/wishlist/list-wishlist', {})
    //     .then(response=> {
    //       store.dispatch({
    //         type: WISHLIST,
    //         payload: response.data
    //       })
    //     }).catch(err => {
    //       alert(err)
    //     })
    }
  
    render() {
            return (
            <>
     <BreadCrumbs />
                <div style={{ flexGrow: '1' }}>
                    <Grid container >
                            {this.props.wish.map(bags => ( 
                                <Grid item sm={12} md={3}>
                                <Card style={{ maxWidth: '345', margin:'20px' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={bags.image}
                                            title={bags.title}
                                        />
                                        <CardContent>
                                        <Grid item sm={12} md={12}>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                            <h3><b><i style={{color:'black'}}>{bags.title}</i></b></h3>
                                              <h5><i>{bags.description}</i>  </h5>
                                                <p>Rs: {bags.price}</p>
                                                <p>Size:{bags.size}</p>
                                                <p>Quantity:{bags.quant}</p>
                                            </Typography>
                                            </Grid>
                                          
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Grid item sm={12} md ={12} spacing={7}>
                                    <Button style={{ color: 'white', backgroundColor: 'red', textAlign: 'center' }} onClick={() => {
                                        // if (!localStorage.getItem('token')) {
                                        //     alert('Please Login First')
                                        //     this.props.history.push('/login')
                                        // }
                                        // else {
                                        //     store.dispatch({
                                        //         type: ADD_TO_BAG,
                                        //         payload:bags
                                        //     })
                                        // }
                                        const prs = { userId: "609fca1769062014bcc38c7a", productId: this.state._id, size: this.state.size, quant: this.state.quant,image:this.state.image,title:this.state.title,price:this.state.price,total: this.state.quant * this.state.price }
                                        
                                        API.post('/add-to-cart/create-cart', prs, {})
                                            .then(response => {
                                                console.log('response ', response);
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
                                        < LocalMallIcon />    Move to bag
                                    </Button>
                                        <Button key={bags.id} size="small" style={{color:'grey', border:'2px solid grey', textAlign:'center',marginLeft:'20px' }}  onClick={()=>{
                                        //     store.dispatch({type:REMOVE,
                                        // payload:bags})
                                        API.delete(`/wishlist/delete-wishlist/${this.state.productId}`, {})
                                        .then(response=> {
                                          store.dispatch({
                                            type: REMOVE,
                                            payload: response.data
                                          })
                                        }).catch(err => {
                                          alert(err)
                                        })
                                        }}>
                                            
                                            Remove 
                                         </Button>
                                         </Grid>
                                        
                                    </CardActions>
                                </Card>
                                </Grid>
                               ))}    
                       
                    </Grid>
         
                </div>
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        wish:state.wish.products,
    }

}
export default (connect(mapStateToProps, {})(withRouter(Wishlist)));







