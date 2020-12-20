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
    },
    app_bar: {
      backgroundColor: '#1c1c1c',
      height: '10vh',
    },
    toolBar: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    avatar: {
      textDecoration: 'none',
      fontFamily: 'Ubuntu, sans-serif',
      backgroundColor: '#5bdfe4',
      color: '#dbfdff'
    },
    navLink: {
      fontSize: '1.6rem',
      fontFamily: 'freestyleScript, sans-serif',
      textDecoration: 'underline',
      fontWeight: 'normal',
      margin: '1rem',
      color: '#dbfdff',
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
      // marginRight: '10rem',
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
              About
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