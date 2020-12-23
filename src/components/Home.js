import { Avatar, Grid } from '@material-ui/core';
import React from 'react';
import { IoChevronDownOutline, IoLogoFacebook, IoLogoGithub } from 'react-icons/io5';
import { AiFillTwitterCircle } from "react-icons/ai";
import './css/Home.css';
import { makeStyles } from '@material-ui/core/styles';
import { CgMouse } from "react-icons/cg";

//-> file import
import dp from '../assets/images/dp.png';

//-> cpomponent import
import Button from './common/Button';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
  }));

const Home = () => {
    const classes = useStyles();

    return (
        <div className={"home_container"}>
            <Grid container className={"scrollBox"}>
                <div className={"landing_box"}>
                    <Grid container>
                        <Grid container className={"landing_info_box"}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <div className={"landing_dp"}>
                                    <Avatar 
                                        alt="mats display pic" 
                                        src={dp}
                                        className={classes.large}
                                    />
                                </div>
                            </Grid>
                            
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <div>
                                    <h5>Hi, I'm Mathew Maendeleo.</h5>
                                </div>
                            </Grid>
                            
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <div>
                                    <h6>Software Developer + UI/UX Designer.. <span className={"blinkingVL"}>|</span></h6>
                                </div>
                            </Grid>
                        </Grid>

                        <Grid container className={"landing_contact_info"}>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <div className={"contact_box"}>
                                    <Button 
                                        variant={"container"}
                                        text={"Contact"}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <div 
                                    style={{
                                        display: 'flex', 
                                        flexDirection: 'column', 
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        marginTop: '1rem',
                                    }}
                                >
                                    <CgMouse className={"mouseIcon"} />
                                    <IoChevronDownOutline className={"chevronIcon"} />
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Grid>

            <Grid container className={"scrollBox"} id={"about"}>
                <div className={"aboutBox"}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <h5>My life /</h5>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                                        Oh did I just mention a DC superhero ? Oh Whatever! <span className={"emoji"} role="img" aria-label="emoji">😎</span> 
                                        <br/>
                                        <span className={"emoji"} role="img" aria-label="emoji">👉</span> <span className={"workText"}>Working at <a href="https://www.firm23.co.tz" target="_blank" rel="noreferrer noopener">Firm23</a></span> <span className={"blinkingVL"}>/</span>
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
            </Grid>

            <Grid container className={"scrollBox socialHookUp"}>
                <div className={"socialBox"}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h5>Don't just pass by, Say Hi !</h5>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{textAlign: 'center'}}>
                            <a href='https://www.twitter.com/chmod_tz' target="_blank" rel="noreferrer noopener"><AiFillTwitterCircle color="#BCE7FD" size='2em'/></a>
                            <a href='https://www.facebook.com/mat2694/' target="_blank" rel="noreferrer noopener"><IoLogoFacebook color="#BCE7FD" size='2em' /></a>
                            <a href='https://www.github.com/mats-26CODE' target="_blank" rel="noreferrer noopener"><IoLogoGithub color="#BCE7FD" size='2em'/></a>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h6>---------- or ----------</h6>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h6>You can find my resume <a href="https://www.linkedin.com/in/mathayo-maendeleo" target="_blank" rel="noreferrer noopener">here</a></h6>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </div>
    )
}

export default Home;
