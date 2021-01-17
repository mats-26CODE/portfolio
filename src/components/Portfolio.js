import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import './css/Portfolio.css';
import  WebApps  from './portfolioComponents/WebApps';


//-> component imports
import Modal from './common/Modal';

const Portfolio = () => {

    const [ webAppVisible, setWebAppVisible ] = useState(false);
    const [ mobAppVisible, setMobAppVisible ] = useState(false);
    const [ uiuxVisible, setUiUxVisible ] = useState(false);
    

    return (
        <div className={"potfolio_container"}>
            <Grid container className={"project_arena"}>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className={"project_box"}>
                    <div onClick={() => setWebAppVisible(true)}><h4>Web Apps /</h4></div>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className={"project_box"}>
                    <div onClick={() => setMobAppVisible(true)}><h4>Mobile Apps /</h4></div>
                </Grid>

                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className={"project_box"}>
                    <div onClick={() => setUiUxVisible(true)}><h4>UI/UX /</h4></div>
                </Grid>
            </Grid>

            { webAppVisible && 
                (<Modal closeModal={() => setWebAppVisible(false)}> 
                    <WebApps />
                </Modal>
                )
            }

            { mobAppVisible && 
                (<Modal closeModal={() => setMobAppVisible(false)}> 
                    <p>The content of the modal 2</p>
                </Modal>
                )
            }

            { uiuxVisible && 
                (<Modal closeModal={() => setUiUxVisible(false)}> 
                    <p>The content of the modal 3</p>
                </Modal>
                )
            }
        </div> 
    )
}

export default Portfolio;
