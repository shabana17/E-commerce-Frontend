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
import { ADD_TO_BAG, REMOVE_TO_BAG } from '../redux/actions/actions';
import {CHECKOUT} from '../redux/actions/actions'
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import { withStyles } from "@material-ui/core/styles";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import GrainIcon from '@material-ui/icons/Grain';
import BreadCrumbs from './breadCrumbs';
import API from './baseurl'
class Bag extends Component {
    constructor(props) {
        super(props);
        this.state={
            userId:this.props.bag.userId,
            productId: this.props.bag.productId,
             title:this.props.bag.title,
             image:this.props.bag.image,
             description:this.props.bag.description,
             price: this.props.bag.price,
             size: this.props.bag.size,
             quant: 1
         }
    }
    componentDidMount(){
        // API.get('/add-top-cart/list-cart', {})
        //     .then(resonse=> {
        //       store.dispatch({
        //         type: ADD_TO_BAG,
        //         payload: response.data
        //       })
        //     }).catch(err => {
        //       alert(err)
        //     })
        // }
    }
    render() {
        console.log(this.props.bag)
        return (
            <>
           <BreadCrumbs />
                <div style={{ flexGrow: '1' }}>
                    <Grid container >
                            {this.props.bag.map(bags => ( 
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
                                                <p>Size: {bags.size}</p>
                                                <p>Qunatity:{bags.quant}</p>
                                            </Typography>
                                            </Grid>
                                           
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Grid item sm={12} md ={12} spacing={7} style={{textAlign:'center'}}>
                                        <Button key={bags.id} size="small" style={{color:'grey', border:'2px solid grey', textAlign:'center' }}  onClick={()=>{
                                        //     store.dispatch({type:REMOVE_TO_BAG,
                                        // payload:bags})
                                        API.delete(`/add-to-cart/delete-cart/${this.state.productId}`, {})
                                        .then(response=> {
                                          store.dispatch({
                                            type: REMOVE_TO_BAG,
                                            payload: response.data
                                          })
                                        }).catch(err => {
                                          alert(err)
                                        })
                                        }}>
                                            
                                            Remove To Bag
                                         </Button>
                                         </Grid>
                                    </CardActions>
                                </Card>
                                </Grid>
                               ))}    
                       
                    </Grid>
                  <Link to ={{pathname:'/addressform'}} style={{textDecoration:'none'}}><Button
                  style={{color:'white', position:'fixed',backgroundColor:'red',
                  bottom: '7%',
                  right: '3%',
                }}>
            Check Out
    </Button></Link>
                </div>
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        bag:state.bag.products,
    }

}
export default(connect(mapStateToProps, {})(withRouter(Bag)));







