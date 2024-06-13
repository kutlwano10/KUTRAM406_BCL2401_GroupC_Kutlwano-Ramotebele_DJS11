import React, { useRef } from "react";
import { useState, useEffect } from "react";

const ShowsTitleCards = () => {
  const [shows, setShows] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const res = await fetch("https://podcast-api.netlify.app");
        const data = await res.json();
        setShows(data)
      } catch (error) {
        console.error("Fetch error:" + error)
      }finally {
        setLoading(false)
      }
    };
    fetchData()
  }, []);

  if(loading) {
    return <h1>Loading ...</h1>
  }

  /**
   * Maps out shows imgs and titles along with there ids
   */
  const showsCards = shows.map((show) => (
    <div className="card" key={show.id}>
      <img src={show.image} alt="" />
      <p>{show.title}</p>
    </div>
  ));

  /**
   * To make the manual scroll on the shows
   */
  // const cardsRef = useRef()

  // const handleScroll = (event) =>{
  //   event.preventDefault();
  //   cardsRef.current.scrollLeft +=event.deltaY;
  // }

  // useEffect(()=>{
  //   cardsRef.current.addEventListener('wheel', handleScroll)
  // })

  return (
    <div className="title-cards">
      <h2>Popular Shows</h2>
      <div className="card-list" >
        {showsCards}
      </div>
    </div>
  );
};

export default ShowsTitleCards;
