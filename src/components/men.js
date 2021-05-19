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
import { withStyles } from "@material-ui/core/styles";
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import GrainIcon from '@material-ui/icons/Grain';
import BreadCrumbs from './breadCrumbs'
import { MEN } from '../redux/actions/actions'
import API from './baseurl'
import store from '../redux/store/store';
class Men extends Component {
    componentDidMount() {
        API.get(`/product/list-product/men`, {})
            .then(response => {
                console.log(response.data.data.pro);
                store.dispatch({
                    type: MEN,
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
                        {this.props.men.map(mens => (
                            <Grid item sm={12} md={3} >
                                <Card style={{ maxWidth: '345', margin: '20px' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="300"
                                            image={mens.image}
                                            title={mens.title}
                                        />
                                        <CardContent>

                                            <Typography variant="body2" color="textSecondary" component="p">
                                                <h4>{mens.title}</h4>
                                                <h6>  {mens.description}</h6>
                                                <p>Rs: {mens.price}</p>
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Link to={`/men/details-men${mens._id}`} style={{ textDecoration: 'none' }}> <Button size="small" style={{ color: 'white', backgroundColor: 'red' }}>
                                            Details
                                            </Button></Link>
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
        men: state.men,
    }
}
export default (connect(mapStateToProps, {})(Men));



