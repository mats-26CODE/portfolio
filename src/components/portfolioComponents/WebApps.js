import React from "react";
import AwesomeSlider from "react-awesome-slider";
import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AwesomeSliderStyles from "react-awesome-slider/src/styled/fall-animation/fall-animation.scss";

//-> file imports
import yesArtworksHome from "../../assets/images/yesartworkshome.png";
import yesArtworksAbout from "../../assets/images/yesartworksabout.png";
import yesArtworksSidebar from "../../assets/images/yesartworkssidebar.png";

const WebApps = () => {
  return (
    <AwesomeSlider
      cssModule={AwesomeSliderStyles}
      animation="fallAnimation"
      mobileTouch={true}
      bullets={true}
      organicArrows={true}
    >
      <div className={"slider_box_divider"}>
        <h4>
          <a
            href={"https://tembo-restaurant.web.app"}
            target="_blank"
            rel="noreferrer noopener"
          >
            View Tembo Restaurant Webpage Now{" "}
          </a>
        </h4>
        <span
          role="img"
          aria-label="next hand emoji"
          className={"emoji_hand_next"}
        >
          👆
        </span>
      </div>

      <div className={"slider_box_divider"}>
        <h4>
          <a
            href={"https://alisample-tjmat.web.app"}
            target="_blank"
            rel="noreferrer noopener"
          >
            View Logistics Company Sample Website Now{" "}
          </a>
        </h4>
        <span
          role="img"
          aria-label="next hand emoji"
          className={"emoji_hand_next"}
        >
          👆
        </span>
      </div>

      <div className={"slider_box_one"}>
        <img src={yesArtworksHome} alt="yes artworks home" />
      </div>
      <div className={"slider_box_two"}>
        <img src={yesArtworksAbout} alt="yes artworks about" />
      </div>
      <div className={"slider_box_three"}>
        <img src={yesArtworksSidebar} alt="yes artworks sidebar" />
      </div>

      <div className={"slider_box_divider"}>
        <h4>
          You've met Yes Artworks already, Wanna see{" "}
          <span className={"strike"}>all</span> more ?
        </h4>
        <span
          role="img"
          aria-label="next hand emoji"
          className={"emoji_hand_next"}
        >
          👉
        </span>
      </div>
    </AwesomeSlider>
  );
};

export default WebApps;
