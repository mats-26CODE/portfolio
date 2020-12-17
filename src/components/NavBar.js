import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    app_bar: {
        backgroundColor: '#1c1c1c',
    },
    avatar: {
        textDecoration: 'none'
    }
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app_bar}>
        <Toolbar>
          <Avatar component={Link} to="/" className={classes.avatar} >
            MT
          </Avatar>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;