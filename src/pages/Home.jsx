import React from "react";
import heroBanner from "../assets/hero_banner.jpg";
import heroTitle from "../assets/hero_title.png";
import playIcon from "../assets/play_icon.png";
import infoIcon from "../assets/info_icon.png";
import ShowsTitleCards from "../components/ShowsTitleCards";

const Home = () => {
  return (
    <div className="home">
      <div className="hero">
        <img className="banner-img" src={heroBanner} alt="" />
        <div className="hero-caption">
          {/* <img className="caption-img" src={heroTitle} alt="" /> */}
          <p>
            Discovaring the accient knowledge of the long lost girl in the
            rivers of tales. The story of a mistery girl from the rural and
            Discovaring an unusual power.
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={playIcon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={infoIcon} alt="" />
              More Info
            </button>
          </div>
          <ShowsTitleCards/>
        </div>
      </div>
    </div>
  );
};

export default Home;
