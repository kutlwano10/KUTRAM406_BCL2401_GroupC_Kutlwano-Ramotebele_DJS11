import React from "react";
import { useParams  } from "react-router-dom";
import { useState, useEffect } from "react";

const PodcastDetails = () => {
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://podcast-api.netlify.app/id/${id}`);
        const data = await res.json();
        console.log(data);
        setShows(data);
      } catch (error) {
        console.error("Fetch error:" + error);
      }
    };
    fetchData();
  }, []);
    
  return (
    <div>
      <h1>Hello this is details</h1>
    </div>
  );
};

export default PodcastDetails;
