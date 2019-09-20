import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
//import AppRouter from "./components/AppRouter.js";
//<Route exact path="/characters" component= {CharacterList} />
 //     <Route exact path="/location" component= {LocationList} />/>
 //     <Route exact path="/episodes" component= {EpisodesList} />/>
//import CharacterList from './components/CharacterList'
//import LocationList from './components/LocationsList'
import EpisodesList from './components/EpisodesList'

export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <EpisodesList />
    </main>
  );
}
