import React from 'react';

function Result({ result, openPopUp }) {
  return (
      <div className="result" onClick={() => openPopUp(result.Title)}>
          <img src={result.Poster} alt="Imagen"/>
          <h3>{result.Title}</h3>
      </div>
  )
}

export default Result
