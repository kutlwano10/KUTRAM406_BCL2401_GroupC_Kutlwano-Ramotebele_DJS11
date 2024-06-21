import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import backButton from "../assets/back-button.png";
import { CircularProgress } from "@mui/material";
import savepng from "../assets/save.png";
import Favorites from "./Favorites";

const PodcastDetails = () => {
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedDescriptions, setExpandedDescriptions] = useState(false);
  const [currentEpisode, setCurrentEpisode] = useState(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        const data = await res.json();
        console.log(data);
        setShow(data);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:" + error);
      }
    };
    fetchData();
  }, [id]);

  /** HANDLE THE MORE & LESS of description when clicked */
  const handleDescriptionToggle = () => {
    setExpandedDescriptions((prev) => !prev);
  };

  const handleEpisodeClick = (episode) => {
    console.log("I am clicked :" + episode )
    setCurrentEpisode({
      ...episode,
      title: episode.title,
      image: episode.image,
    });
  };

  /** HANDLE FAVORITES CLICK */
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Load favorites from localStorage on component mount
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteEpisodes')) || [];
    setFavorites(storedFavorites);
  }, []);

  const handleFavoriteClick = (episode) => {
    // Check if the episode is already in favorites
    const isFavorite = favorites.some((fav) => fav.title === episode.title);

    if (isFavorite) {
      // Remove from favorites
      const updatedFavorites = favorites.filter((fav) => fav.title !== episode.title);
      setFavorites(updatedFavorites);
      // Update localStorage with updated favorites
      localStorage.setItem('favoriteEpisodes', JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, episode];
      setFavorites(updatedFavorites);
      // Update localStorage with updated favorites
      localStorage.setItem('favoriteEpisodes', JSON.stringify(updatedFavorites));
    }
  };

  const isFavorite = (episode) => {
    return favorites.some((fav) => fav.title === episode.title);
  };

  // const handleEpisodeClick = (episode) => {
  //   // Handle click logic for episode
  //   console.log('Clicked episode:', episode);
  // };


  
const [selectedSeason, setSelectedSeason] = useState(null)
  const HandleSeasonClick =(index)=> {
    setSelectedSeason(selectedSeason === index ? null : index)
  }

  return (
    <div className="podcast-list-container">
      {loading ? (
        <div className="loading"><CircularProgress/></div>
      ) : (
        <>
          <Link to=".." relative="path">
            <img src={backButton} alt="" />
          </Link>
          <div>
            <h2>{show.title}</h2>
            <div className="podcast-details">
              <div>
                <img src={show.image} alt={show.title} />
                <p>{show.updated}</p>
              </div>
              <p>
                {expandedDescriptions
                  ? show.description
                  : `${show.description.slice(0, 150)}...`}
                <button onClick={handleDescriptionToggle}>
                  {expandedDescriptions ? "Show Less" : "Read More"}
                </button>
              </p>
            </div>
          </div>
          <h1>Seasons</h1>
          {/* Displaying Podcast seasons */}


          {show.seasons && show.seasons.length > 0 && (
            <div className="podcast-seasons-container">
              {show.seasons.map((season, index) => (
                <div className="podcast-seasons" key={season.season}>
                  <h3>{season.title}</h3>
                  <img src={season.image} alt={season.title} onClick={()=>HandleSeasonClick(index)}/>

                  {/* THE EPISODES*/}
                  {selectedSeason  === index && (
                  <>
                  <h1>Episodes</h1>
                  {season.episodes.map((episode) => (
                    <div
                      className="episodes"
                      key={episode.episode}
                      style={{ cursor: "pointer" }}
                      
                    >
                      <img src={season.image} alt="" onClick={() => handleEpisodeClick(episode)} />
                      <h6>{episode.title}</h6>
                      <button onClick={() => handleFavoriteClick(episode)}>
                        {isFavorite(episode) ? "❤️" : "♡"}
                      </button>
                    </div>
                  ))}
                  </>
                  )}
                </div>
              ))}
            </div>
          )}
        </>
      )}
      {currentEpisode && (
        <div className="audio-player">
          <img src={show.image} alt=""/>
          
          
          <audio controls autoPlay>
            <source src={currentEpisode.file} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
          <h5>{currentEpisode.title}</h5>
        </div>
      )}
    </div>
  );
};

export default PodcastDetails;
