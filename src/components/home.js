import React  from 'react';

import {useHistory} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
  
    root1: {
      maxWidth: 650,
    },
    media: {
      height: 390,
    },
  
  }));
  function Home(){
    const classes = useStyles();
    const history = useHistory();
    function men(){
      history.push('/men');
    }
    function women(){
      history.push('/women');
    }
    function kids(){
      history.push('/kids');
    }
    function furniture(){
      history.push('/furniture');
    }
 return (
   <>
     <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="2000">
      <img src="clarke-sanders-ybPJ47PMT_M-unsplash.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="becca-mchaffie-Fzde_6ITjkw-unsplash.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="joshua-chun-y_gFnFzr0HY-unsplash.jpg" class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="amanda-vick-ohWf6YuzOQk-unsplash.jpg" class="d-block w-100" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden" style={{color:'black'}}>Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden" style={{color:'black'}}>Next</span>
  </button>
</div>
<div>
  <br />
  <br />
<div className={classes.root}>
<Grid container >
<Grid item xs={12} sm={12} md={6}>
          <Card className={classes.root1} style={{margin:'20px', boxShadow:'5px 5px solid black' }}>
      <CardActionArea>
        <CardMedia
          className={classes.media} style={{margin:'20px'}}
          image="tyler-nix-3OG8ywzgjJY-unsplash.jpg"
          title="Men Trends" 
          onClick={men}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={{textAlign:'center'}} component="h2">
           Men
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <br />
        <br />
        <Grid item xs={12} sm={12} md={6}>
          <Card className={classes.root1} style={{margin:'20px', boxShadow:'5px 5px solid black'}}>
      <CardActionArea>
        <CardMedia
          className={classes.media} style={{margin:'20px'}}
          image="bbh-singapore-j_gv4ep3eT4-unsplash.jpg"
          title="WOmen Trends" 
           onClick={women}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={{textAlign:'center'}} component="h2">
           Women
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <br />
        <br />
        <Grid item xs={12} sm={12} md={6}>
          <Card className={classes.root1} style={{margin:'20px', boxShadow:'5px 5px solid black'}}>
      <CardActionArea>
        <CardMedia
          className={classes.media} style={{margin:'20px'}}
          image="joshua-chun-y_gFnFzr0HY-unsplash.jpg"
          title="Kids Trends" 
           onClick={kids}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={{textAlign:'center'}} component="h2">
           Kids
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <br />
        <br />
        <Grid item xs={12} sm={12} md={6}>
         
          <Card className={classes.root1} style={{margin:'20px', boxShadow:'5px 5px solid black'}}>
      <CardActionArea>
        <CardMedia
          className={classes.media} style={{margin:'20px'}}
          image="behzad-ghaffarian-nhWgZNV85LQ-unsplash.jpg"
          title="Furniture" 
           onClick={furniture}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" style={{textAlign:'center'}} component="h2">
           Furniture
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
        </Grid>
        <br />
        <br />
</Grid>

 </div>
    </div>
   </>
 )
}

export default Home;