import React, { Component } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import MoreIcon from '@material-ui/icons/MoreVert';
import { withRouter } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import { REMOVE_TO_BAG } from '../redux/actions/actions';
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    color: 'black',
    cursor: 'pointer',
    padding: theme.spacing(1, 1, 1, 0),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));
function Navbar() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const username = useSelector(state => state.signup.username)
  console.log('useeee', username)
  const len = useSelector(state => state.bag.products);
  const wish = useSelector(state => state.wish.products)
  function bag() {
    history.push('/bag');
  }
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  let st = useSelector(state => state.signup)
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  function title() {
    history.push('/');
  }
  function men() {
    history.push('/men');
  }
  function women() {
    history.push('/women');
  }
  function kids() {
    history.push('/kids');
  }
  function furniture() {
    history.push('/furnitures');
  }
  function bag() {
    history.push('/bag');
  }
  function wishlist() {
    history.push('/wishlist');
  }
  function logout() {
    localStorage.removeItem('token');
    // localStorage.removeItem('username');
    window.location.href = '/'
  }
  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <Button onClick={() => { history.push('/login') }}>   <MenuItem onClick={handleMenuClose}>Login/Sign Up</MenuItem></Button><br />
      <Button onClick={() => { history.push('/profile') }}>  <MenuItem onClick={handleMenuClose}>Profile Setting</MenuItem></Button><br />
      <Button onClick={logout}>  <MenuItem onClick={handleMenuClose}>Logout</MenuItem></Button><br />
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={men}>
        <p>Men</p>
      </MenuItem>
      <MenuItem onClick={women}>
        <p>Women</p>
      </MenuItem >
      <MenuItem onClick={kids}>
        <p>Kids</p>
      </MenuItem >
      <MenuItem onClick={furniture}>
        <p>Furniture</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Badge badgeContent={wish.length} color="secondary">
            <LoyaltyIcon onClick={wishlist} />
          </Badge>

        </IconButton>

      </MenuItem>
      <MenuItem>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <Badge badgeContent={len.length} color="secondary">
            <LocalMallIcon onClick={bag} />
          </Badge>

        </IconButton>

      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        {localStorage.getItem('token') ?
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            {username} </IconButton> : <IconButton
              aria-label="account of current user"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
            ><AccountCircle />

          </IconButton>}

      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: '2px 2px solid black' }}>
        <Toolbar>
          <img src='logos.png' style={{ cursor: 'pointer' }} onClick={title}></img>
          <Typography className={classes.title} onClick={title} variant="h3" noWrap>
            <i>SHeiZZ</i>
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton color="black" onClick={men}>
              Men
            </IconButton>
            <IconButton color="black" onClick={women}>
              Women
            </IconButton>
            <IconButton color="black" onClick={kids}>
              Kids
            </IconButton>
            <IconButton color="black" onClick={furniture}>
              Furniture
            </IconButton>
            <IconButton>
              <Badge badgeContent={wish.length} color="secondary">
                <LoyaltyIcon onClick={wishlist} />
              </Badge>

            </IconButton>
            <IconButton>
              <Badge badgeContent={len.length} color="secondary">
                <LocalMallIcon onClick={bag}></LocalMallIcon>
              </Badge>

            </IconButton>
            {localStorage.getItem('token') ?
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="black"
              >
                <div>{username}</div>

              </IconButton> :
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="black"
              >
                <AccountCircle />

              </IconButton>}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="black"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default (withRouter(Navbar));