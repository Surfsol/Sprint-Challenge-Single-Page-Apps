import React, { useEffect, useState } from "react";
import Axios from "axios";
import EpisodesCard from './EpisodesCard'

export default function EpisodesList() {
    const[episode, setEpisode] = useState([])

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getEpisode = () => {
      Axios 
        .get('https://rickandmortyapi.com/api/episode/')
        .then(response => {
          console.log(`ep response`, response)
          console.log(`epi response.data.results`, response.data.results)
          setEpisode(response.data.results);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getEpisode();
  }, []);

  return (
    <section className="character-list grid-view">
      <h2>
        {episode.map((e, index) => (
        <EpisodesCard
        key = {index}
        name= {e.name}
        air_date= {e.air_date}
        />
      ))}
      </h2>
    </section>
  );
}
