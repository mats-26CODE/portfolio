import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { FaFan } from "react-icons/fa";
import { Link as ScrollLink } from 'react-scroll';

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
      fontFamily: 'Nunito-bold, sans-serif',
      backgroundColor: '#2A2ACC',
      color: '#c5c5c5',
      border: '0.15rem solid #5554D7',
    },
    navLink: {
      fontSize: '1.6rem',
      fontFamily: 'freestyleScript, sans-serif',
      textDecoration: 'underline #5554D7',
      fontWeight: 'normal',
      margin: '1rem',
      color: '#c5c5c5',
      '&:hover': {
        color: '#fcfcfc',
        cursor: 'pointer',
        transition: 'all .5s',
        webkitTransition: 'all .5s',
        textDecoration: 'none',
      },
    },
    aboutLink: {
        textDecorationColor: '#5554D7',
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
              <span className={"about"}>
                  <ScrollLink activeClass="active" to="scrollBoxTwo" spy={true} smooth={true} duration={1000} className={classes.aboutLink}>
                      About
                  </ScrollLink>
              </span>
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