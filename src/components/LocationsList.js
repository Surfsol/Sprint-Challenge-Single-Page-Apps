import React, { useEffect, useState } from "react";
import Axios from "axios";
import LocationCard from './LocationCard'

export default function LocationsList() {
    const[loc, setLoc] = useState([])

    useEffect(() => {
        const getChar = () => {
            Axios 
              .get('https://rickandmortyapi.com/api/location/')
              .then(response => {
                console.log(`loc response`, response)
                console.log(`loc response.data.results`, response.data.results)
                setLoc(response.data.results);
              })
              .catch(error => {
                console.error('Server Error', error);
              });
          }
          getChar();
        }, []);
      
        return (
          <section className="character-list grid-view">
            <h2>
              {loc.map((e, index) => (
              <LocationCard
              key = {index}
              name= {e.name}
              type= {e.type}
              dimension= {e.dimension}
              residents= {e.residents.lenght}
              />
            ))}
            </h2>
          </section>
        );
}