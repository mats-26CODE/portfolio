import React from 'react';
import AwesomeSlider from "react-awesome-slider";
import CoreStyles from 'react-awesome-slider/src/core/styles.scss'
import AwesomeSliderStyles from 'react-awesome-slider/src/styled/fall-animation/fall-animation.scss';
import { IoHourglassOutline } from 'react-icons/io5';


//-> file imports
// import yesArtworksHome from '../../assets/images/yesartworkshome.png';


const MobileApps = () => {
    return (
        <AwesomeSlider
            cssModule={AwesomeSliderStyles}
            animation="fallAnimation"
            mobileTouch={true}
            bullets={true}
            organicArrows={true}
        >

            <div className={"slider_box_divider"}>
                <h4>Say Nothing! i'll be here soon</h4>
                <IoHourglassOutline style={{color: '#1a84cc', fontSize: '2.8rem'}} />
            </div>

        </AwesomeSlider>
    )
};


export default MobileApps;