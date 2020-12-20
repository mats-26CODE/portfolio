import { Avatar, Grid } from '@material-ui/core';
import React from 'react';
import { } from 'react-icons/io5';
import './css/Home.css';
import { makeStyles } from '@material-ui/core/styles';
import { CgMouse } from "react-icons/cg";

//-> file import
import dp from '../assets/images/dp.png';

//-> cpomponent import
import Button from './common/Button';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  }));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={"home_container"}>
            <div className={"landing_image_box"}>
                <Grid container className={"landing_info_box"}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className={"landing_avatar_box"}>
                            <Avatar 
                                alt="mats display pic" 
                                src={dp}
                                className={classes.large} 
                            />
                        </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div>
                            <h5>Hi, I'm Mathew Maendeleo</h5>
                        </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div>
                            <h6>Software Developer + UI/UX Designer <span className={"blinkingVL"}>|</span></h6>
                        </div>
                    </Grid>
                </Grid>

                <Grid container className={"landing_contact_info"}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div>
                            <Button 
                                text={"CONTACT"}
                            />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div>
                            <CgMouse className={"mouseIcon"} />
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Home;
