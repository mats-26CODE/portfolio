import React, { useRef } from 'react';
import { Avatar, Grid } from '@material-ui/core';
import './css/Home.css';
import { makeStyles } from '@material-ui/core/styles';
import { ReactComponent as CodingArtwork } from '../assets/images/coding.svg';
import { Link as ScrollLink } from 'react-scroll';

//-> react icon imports
import { 
    IoChevronDownOutline, 
    IoLogoFacebook, 
    IoLogoGithub, 
    IoBrushSharp, 
    IoFootball, 
    IoVideocamOutline,
    IoGameController,
    IoLogoReact,
    IoLogoJavascript,
    IoLogoHtml5,
 } from 'react-icons/io5';
import { AiFillTwitterCircle } from "react-icons/ai";
import { CgMouse } from "react-icons/cg";
import { GiFountainPen, GiEyedropper } from 'react-icons/gi';
import { ImPencil } from 'react-icons/im';
import { DiPhp, DiCss3 } from "react-icons/di";

//-> file import
import dp from '../assets/images/dp.png';

//-> component import
import Button from './common/Button';
import NavBar from './NavBar';
import Footer from './Footer';
import GooTrail from './common/GooTrail';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(12),
      height: theme.spacing(12),
    },
}));

const Home = () => {
    const classes = useStyles();
    const myRef = useRef(null);

    return (
        <div className={"home_container"}>
            <Grid container className={"scrollBox"}>
                <NavBar />
                <div className={"landing_box"} id={"boxOne"}>
                    <div>
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
                                        href={"mailto: mathayomaendeleo@gmail.com"}
                                    />
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                <div>
                                    <ScrollLink activeClass="active" to="scrollBoxTwo" spy={true} smooth={true} duration={1000}>
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
                                    </ScrollLink>
                                </div>
                            </Grid>
                        </Grid>
                    </div>

                    <CodingArtwork className={"codingArtwork"} />

                    <div className={"landingIconsBox"}>
                        <IoBrushSharp style={{color: "#0074bb", fontSize: '2rem' }}/>
                        <GiFountainPen style={{color: "#008DD5", fontSize: '2rem' }}  />
                        <ImPencil style={{color: "#0c69d5", fontSize: '2rem' }}/>
                        <GiEyedropper style={{color: "#20EEEE", fontSize: '2rem' }} />
                    </div>

                    <div id={'triangle-bottomleft'}></div>
                    <div id={'triangle-bottomright'}></div>
                    <div id={'landing_icons'}>
                        <IoVideocamOutline size={'2em'} color={'#353535'} />
                        <IoFootball size={'2.5em'} color={'#353535'} />
                        <IoGameController size={'2em'} color={'#353535'} />
                    </div>
                    {/* trailing bubble */}
                    <GooTrail />
                    {/* --------------- */}
                </div>
            </Grid>

            <Grid container className={"scrollBox"} id={"scrollBoxTwo"}>
                <div className={"aboutBox"}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <h5>My life /</h5>
                            <div className={"aboutNickNameBox"}>
                                <h4>Call me <br/> <span className={"mtNickName"}>MT.</span></h4>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                            <div>
                                <div>
                                    <h6>Professionally /</h6>
                                    <p>
                                        I am more of a front-end developer, its a thing and i believe that the <span className={"strike"}>uncle</span>, Oh its the user that still matters the most.
                                        <br/>
                                        Currently working with <IoLogoReact color={'#20eeee'}/> React + React Native, <DiPhp color={'#7477AE'} /> PHP, <IoLogoJavascript color={'#EFD819'} /> JavaScript, <IoLogoHtml5 color={'#DD4B25'} /> HTML, <DiCss3 color={'#244CDD'} /> CSS to solve <span className={"strike"}>some</span>, 
                                        <span className={"strike"}>all</span>, problems.
                                        <br/>
                                        I enjoy UI/UX designing, to be honest i am not marvel, but I can make your app's UI/UX fly like superman!
                                        Oh, did I just mention a DC superhero ? Oh Whatever! <span className={"emoji"} role="img" aria-label="emoji">😎</span> 
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
                {/* trailing bubble */}
                <GooTrail />
                {/* --------------- */}
            </Grid>

            <Grid container className={"scrollBox socialHookUp"}>
                <div className={"socialBox"} id={"boxThree"}>
                    <Grid container>
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h5>Don't just pass by, Say Hi !</h5>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} style={{textAlign: 'center'}} className={"socialIconsBox"}>
                            <a href='https://www.twitter.com/chmod_tz' target="_blank" rel="noreferrer noopener"><AiFillTwitterCircle color="#c5c5c5" size='2em' className={"socialIcon"}/></a>
                            <a href='https://www.facebook.com/mat2694/' target="_blank" rel="noreferrer noopener"><IoLogoFacebook color="#c5c5c5" size='2em' className={"socialIcon"}/></a>
                            <a href='https://www.github.com/mats-26CODE' target="_blank" rel="noreferrer noopener"><IoLogoGithub color="#c5c5c5" size='2em'className={"socialIcon"}/></a>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h6>---------- or ----------</h6>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <h6>You can find my resume <a href="https://www.linkedin.com/in/mathayo-maendeleo" target="_blank" rel="noreferrer noopener">here</a></h6>
                        </Grid>
                    </Grid>
                </div>
                {/* trailing bubble */}
                <GooTrail />
                {/* --------------- */}
                <Footer />
            </Grid>
        </div>
    )
}

export default Home;
