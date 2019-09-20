import React, { useEffect, useState } from "react";
import Axios from "axios";
import CharacterCard from './CharacterCard'
import {SearchForm} from './SearchForm'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const[char, setChar] = useState([])
  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChar = () => {
      Axios 
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(`char response`, response)
        console.log(`char response.data.results`, response.data.results)
        setChar(response.data.results);
      })
      .catch(error => {
        console.error('Server Error', error);
      });
  }
  getChar();
}, []);

  return (
    
    <section className="character-list grid-view">
      
      <h2>{char.map((e, index) => (
        <CharacterCard
        key = {index}
        name= {e.name}
        species= {e.species}
        status= {e.status}
        type= {e.type}
        url= {e.image}
        /> 
      ))}</h2>
    </section>
  )
}
