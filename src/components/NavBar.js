import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { FaFan } from "react-icons/fa";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      zIndex: -5
    },
    app_bar: {
      backgroundColor: '#161616',
      height: '10vh',
    },
    toolBar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    avatar: {
      textDecoration: 'none',
      fontFamily: 'Ubuntu, sans-serif',
      backgroundColor: '#1b5dc0',
      color: '#BCE7FD'
    },
    navLink: {
      fontSize: '1.6rem',
      fontFamily: 'freestyleScript, sans-serif',
      textDecoration: 'underline',
      fontWeight: 'normal',
      margin: '1rem',
      color: '#BCE7FD',
      '&:hover': {
        color: '#fcfcfc',
        cursor: 'pointer',
        transition: 'all .5s',
        webkitTransition: 'all .5s',
        textDecoration: 'none',
      },
    },
    linksBox: {
      display: 'flex',
      alignItems: 'center',
    },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app_bar}>
        <Toolbar className={classes.toolBar}>
          <Avatar component={Link} to="/" className={classes.avatar} >
            MT
          </Avatar>

          <div className={classes.linksBox}>
            <Typography variant="h6" className={classes.navLink}>
              <span className={"about"}><a href="#about">About</a></span>
            </Typography>

            <Typography variant="h6" className={classes.navLink} component={Link} to="/portfolio">
              Portfolio
            </Typography>
          </div>

          <div>
            <FaFan className={"fanIcon"} />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;