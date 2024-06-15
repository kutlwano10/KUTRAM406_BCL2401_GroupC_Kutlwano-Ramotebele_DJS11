import React from "react";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const Podcasts = () => {
  const [shows, setShows] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  /** it will get the values of the genres*/
  const genresFilter = searchParams.get("genres");
  console.log(genresFilter)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://podcast-api.netlify.app");
        const data = await res.json();
        console.log(data);
        setShows(data);
      } catch (error) {
        console.error("Fetch error:" + error);
      }
    };
    fetchData();
  }, []);

  /**
   * genresFilter is the value of "genres" which is 
   * an array[numbers] -that respresent the genre names
   * 
   * -We need to turn that value into an Integer
   */
  const genreFilterNumber = genresFilter ? parseInt(genresFilter, 10) : null;

  /**check if the Int/number is there
   * if it is , i want to filter out from the shows and check
   * if the genres key includes the integer/number
   */
  const displayPodcasts = genreFilterNumber
    ? shows.filter((genre) => genre.genres.includes(genreFilterNumber))
    : shows;

    /**After it filters out the same number 
     * i maped the filtered ones and displayed them
     */
  const showsCards = displayPodcasts.map((show) => (
    <div className="show-card" key={show.id}>
      <Link to={`/podcasts/${show.id}`}>
        <img src={show.image} alt="" />
        <p>{show.title}</p>
      </Link>
    </div>
  ));


  return (
    <div className="podcast-list-container">
      <h1>All Podcasts</h1>
      <div className="filter-genres-buttons">
        <Link to="?genres=1">Personal Growth</Link>
        <Link to="?genres=2">Investigative Journalism</Link>
        <Link to="?genres=3">History</Link>
        <Link to="?genres=4">Comedy</Link>
        <Link to="?genres=5">Entertainment</Link>
        <Link to="?genres=6">Business</Link>
        <Link to="?genres=7">Fiction</Link>
        <Link to="?genres=8">News</Link>
        <Link to="?genres=9">Kids and Family</Link>
        <Link to="?genres=.">clear </Link>
      </div>

      <div className="podcast-card-list">{showsCards}</div>
    </div>
  );
};

export default Podcasts;
