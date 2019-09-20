import React, { useState } from 'react';
import {Route} from "react-router-dom"; 
//import TabNav from "./components/TabNav.js";
//import Header from "./components/Header.js";
//import AppRouter from "./components/AppRouter.js";
//<Route exact path="/characters" component= {CharacterList} />
 //     <Route exact path="/location" component= {LocationList} />/>
 //     <Route exact path="/episodes" component= {EpisodesList} />/>
import CharacterList from './components/CharacterList'
import SearchForm from './components/SearchForm'
//import EpisodesList from './components/EpisodesList'

// export default function App() {
//   return (
//     <main>
//       <Header />
//       <TabNav />
//       <CharacterList />
//     </main>
//   );
// }

 const App = () => {
  const [savedperson, setSavedPerson] = useState( [] );

  const addToSavedList = person => {
    setSavedList( [...savedList, person] );
  };

  return (
    <div>
      <Route exact path="/" component={CharacterList}/>
      <Route path="/searchform/:id" render={props => <SearchForm {...props} />}/>
    </div>
  );
};

export default App;