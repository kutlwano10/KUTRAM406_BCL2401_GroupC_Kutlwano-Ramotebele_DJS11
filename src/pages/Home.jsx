import React from "react";
import {Link} from "react-router-dom"
import { useEffect, useState,  } from "react";
import heroBanner from "../assets/hero_banner.jpg";
import heroTitle from "../assets/hero_title.png";
import playIcon from "../assets/play_icon.png";
import infoIcon from "../assets/info_icon.png";
// import ShowsTitleCards from "../components/HomePodcasts";
import HomePodcasts from "../components/HomePodcasts";
import wallpaper from "../assets/wallpaper.jpg"
const Home = () => {
  const [shows, setShows] = useState()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await fetch("https://podcast-api.netlify.app");
  //       const data = await res.json();
  //       console.log(data);
  //       setShows(data);
  //     } catch (error) {
  //       console.error("Fetch error:" + error);
  //     }
  //   };
  //   fetchData();
  // }, []);

 


  return (
    <div className="home">
      <div className="hero">
        <img className="banner-img" src={wallpaper} alt="" />
        <div className="hero-caption">
          {/* <img className="caption-img" src={heroTitle} alt="" /> */}
          {/* <p>
            
          </p> */}
          <div className="hero-btns">
          <Link to="/podcasts" relative="path"><button className="btn">
              <img src={playIcon} alt="" />
              Play
            </button>
            </Link>
            <button className="btn dark-btn">
              <img src={infoIcon} alt="" />
              More Info
            </button>
          </div>
          <HomePodcasts/>
        </div>
      </div>
    </div>
  );
};

export default Home;
