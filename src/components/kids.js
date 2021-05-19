import React, { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import GrainIcon from '@material-ui/icons/Grain';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { KIDS } from '../redux/actions/actions';
import store from '../redux/store/store';
import BreadCrumbs from './breadCrumbs'
import API from './baseurl'

class Kids extends Component {
    componentDidMount(){
        API.get(`/product/list-product/kids`, {})
            .then(response => {
              console.log(response.data.data.pro);
              store.dispatch({
                type: KIDS,
                payload: response.data.data.pro
              })
            }).catch(err => {
              alert(err)
            })
    }
    render() {
        return (
            <>
        <BreadCrumbs />
                <div style={{ flexGrow: '1' }}>
                    <Grid container >
                        <>
                        
                             {this.props.kid.map(kids => (
                                <Grid item sm={12} md={3}>
                                <Card style={{ maxWidth: '345', margin:'20px' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={kids.image}
                                            title={kids.title}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="textSecondary" component="p">
                                            <h4>{kids.title}</h4>
                                              <h6>  {kids.description}</h6>
                                                <p>Rs: {kids.price}</p>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to={`/kids/details-kids${kids._id}`}style={{textDecoration:'none'}}>   <Button size="small" style={{color:'white', backgroundColor:'red', textAlign:'center' }} >
                                         DETAILS
              </Button></Link>

                                    </CardActions>
                                </Card>
                                </Grid>
                            ))} 
                        </>
                    </Grid>
                </div>
            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        kid: state.kids,
    } 
}
export default   (connect(mapStateToProps, {})(Kids));




