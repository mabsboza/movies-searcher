import React from 'react';
import Result from './Result';

function Results({ results, openPopUp }) {
  return (
    <section className="results">
    {
     results.map( result =>(
       <Result key={result.imdbID} result={result} openPopUp={openPopUp}/>
     )) 
    }
    </section>
  )
}

export default Results
