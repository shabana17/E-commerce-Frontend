import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { WOMEN } from '../redux/actions/actions';
import store from '../redux/store/store';
import { withStyles } from "@material-ui/core/styles";
import BreadCrumbs from './breadCrumbs'
import HomeIcon from '@material-ui/icons/Home';
import GrainIcon from '@material-ui/icons/Grain';
import API from './baseurl'

class Women extends Component {
    componentDidMount(){
        API.get(`/product/list-product/women`, {})
            .then(response => {
              console.log(response.data.data.pro);
              store.dispatch({
                type: WOMEN,
                payload: response.data.data.pro
              })
            }).catch(err => {
              alert(err)
            })
    }
    render() {
      
        return (
            <>
         <BreadCrumbs/>
                <div style={{ flexGrow: '1' }}>
                    <Grid container >
                        <>                        
                             {this.props.women.map(womens => (
                                <Grid item sm={12} md={3}>
                                <Card style={{ maxWidth: '345', margin:'20px' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={womens.image}
                                            title={womens.title}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="textSecondary" component="p">
                                            <h4>{womens.title}</h4>
                                              <h6>  {womens.description}</h6>
                                                <p>Rs: {womens.price}</p>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                    <Link to={`/women/details-women${womens._id}`} style={{textDecoration:'none'}}>    <Button size="small" style={{color:'white', backgroundColor:'red', textAlign:'center' }} >
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

        women: state.women,
    } 
}
export default(connect(mapStateToProps, {})(Women));



