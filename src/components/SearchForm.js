import React, { useState } from "react";
import axios from 'axios';

const Person = (props) => {

const [person, setPerson] = useState({});
  console.log(`search`,props)

  const personId = props.match.params.id

  useEffect(() => {
    const id = personId ;
    console.log(id)
       axios
        .get(`https://rickandmortyapi.com/api/${id}/`)
        .then(response => {
          console.log(response.data)
          setMovie(response.data);
        })
        .catch(error => {
          console.error(error);
        });
  
  },[props.id]);

 function SearchForm({ onSearch }) {
  // TODO: Add stateful logic for query/form data
  const
  return (
    <section className="search-form">
      <form onSubmit={() => onSearch(name)}>
        <input
          onChange={handleInputChange}
          placeholder="name"
          value={name}
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}
export default SearchForm
