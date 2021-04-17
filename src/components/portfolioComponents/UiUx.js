import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import CoreStyles from 'react-awesome-slider/src/core/styles.scss'
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';

//-> react icons import
import { GiHummingbird } from 'react-icons/gi';


//-> file imports
// import yesArtworksHome from '../../assets/images/yesartworkshome.png';


const UiUx = () => {
    return (
        <AwesomeSlider
            cssModule={AwesomeSliderStyles}
            animation="fallAnimation"
            mobileTouch={true}
            bullets={true}
            organicArrows={true}
        >

            <div className={"slider_box_divider"}>
                <GiHummingbird style={{color: '#1a84cc', fontSize: '12rem'}} />
                <h4>Check out on <span className={"strike"}> all</span> some of my designs <a href="https://dribbble.com/mat__ayo" target="_blank" rel="noreferrer noopener">here </a> <span className={"blinkingVL"}> /</span></h4>
            </div>

        </AwesomeSlider>
    )
};


export default UiUx;
