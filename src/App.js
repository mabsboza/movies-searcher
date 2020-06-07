import React, { useState } from 'react';
import Search from './componetns/Search';
import Results from './componetns/Results';
import PopUp from './componetns/PopUp';
import axios from 'axios';

function App() {
  const [state, setstate] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?i=tt3896198&apikey=7d08aff3";

  const search = (e) => {
    if(e.key === "Enter"){
      if(state.s !== null && state.s !== ""){
        axios(apiurl + "&s=" + state.s.toUpperCase()).then(({data}) => {
          let result = data.Search
          console.log(result);
          setstate( prevState =>{
            return {...prevState, results: result}
          });
        });
      }
    }
  }

  const handleSearch = (e) => {
    let s = e.target.value;

    setstate( prevState =>{
      return {...prevState, s: s}
    });
  };

  const openPopUp = id => {
    axios(apiurl + "&t=" + id).then(({data}) => {
      let result = data;
      console.log(result);
      setstate( prevState =>{
        return {...prevState, selected: result}
      });
    });
  };

  const closePopUp = id => {
    setstate( prevState =>{
      return {...prevState, selected: {}}
    });
  };

  return (
    <div className="App">
      <header>
       <h1>Buscador de Peliculas</h1>
      </header>
      <main>
        <Search handleSearch={handleSearch} search={search}/>
        <Results results={state.results} openPopUp={openPopUp}/>
        {(typeof state.selected.Title != "undefined") ? <PopUp selected={state.selected} closePopUp={closePopUp}/> : false }
      </main>
    </div>
  );
}

export default App;
