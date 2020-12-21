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
            <div className={"scrollBox"}>
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

            <div className={"scrollBox"}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={"aboutBox"}>
                        <div><h5>My life /</h5></div>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={"aboutBox"}>
                        <div>
                            <div>
                                <h6>Professionally /</h6>
                                <p>
                                    I am more of a front-end developer because i believe the <span className={"strike"}>uncle</span>, Oh its the user that still matters the most.
                                    <br/>
                                    Currently working with React, React Native, PHP, JavaScript, HTML, CSS to solve <span className={"strike"}>some</span>, 
                                    <span className={"strike"}>all</span>, problems.
                                    <br/>
                                    I enjoy UI/UX designing, to be honest i am not marvel, but I can make your app's UI/UX fly like superman!
                                    Oh did I just mention a DC superhero ? Oh Whatever! 😎 
                                </p>
                            </div>

                            <div>
                                <h6>Personally /</h6>
                                <p>
                                    Apart from the pro life, I love <span className={"strike"}>playing</span> (retired), watching football, movies, playing 
                                    video games.
                                </p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className={"scrollBox"}>
                <div>siv three</div>
            </div>
        </div>
    )
}

export default Home;
