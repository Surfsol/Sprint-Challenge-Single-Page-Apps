import React, { useState } from 'react';
import {Route} from "react-router-dom"; 
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import CharacterList from './components/CharacterList'
import FormikSearchForm from './components/SearchForm'
import LocationList from './components/LocationsList'
import EpisodesList from './components/EpisodesList'


 export default function App() {
   return (
    <main>
      <Header />
      <TabNav />
      <Route path="/characters" render={props => <FormikSearchForm {...props} />}/>
      <Route exact path="/characters" component={CharacterList}/>
      <Route exact path="/location" component={LocationList}/>
      <Route exact path="/episodes" component={EpisodesList}/>
      
    </main>
   );
  
};

