import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import backButton from "../assets/back-button.png";
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
    setCurrentEpisode({
      ...episode,
      title: episode.title,
      image: episode.image,
    });
  };

  /** HANDLE FAVORITES CLICK */
  const [favorites, setFavorites] = useState([]);

  const handleFavoriteClick = (episode, event) => {
    event.stopPropagation();
    setFavorites((prevFavorites) => {
      if (prevFavorites.some((fav) => fav.id === episode.id)) {
        return prevFavorites.filter((fav) => fav.id !== episode.id);
      } else {
        return [...prevFavorites, episode];
      }
    });
  };

  const isFavorite = (episode) => {
    return favorites.some((fav) => fav.id === episode.id);
  };
const [selectedSeason, setSelectedSeason] = useState(null)
  const HandleSeasonClick =(index)=> {
    setSelectedSeason(selectedSeason === index ? null : index)
  }

  return (
    <div className="podcast-details-container">
      {loading ? (
        <h1>Loading ...</h1>
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
                <div className="podcast-seasons" key={index}>
                  <h3>{season.title}</h3>
                  <img src={season.image} alt={season.title} onClick={()=>HandleSeasonClick(index)}/>

                  {/* THE EPISODES*/}
                  {selectedSeason === index && (
                  <>
                  <h1>Episodes</h1>
                  {season.episodes.map((episode) => (
                    <div
                      className="episodes"
                      key={episode.id}
                      style={{ cursor: "pointer" }}
                      onClick={() => handleEpisodeClick(episode)}
                    >
                      <img src={season.image} alt="" />
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
