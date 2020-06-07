import React from 'react'

function PopUp({selected, closePopUp}) {
  return (
    <section className="popup">
      <div className="content">
        <h2>{selected.Title} <span>{selected.Year}</span></h2>
        <p className="rating"> Rating: {selected.imdbRating}</p>
        <div className="plot">
          <img src={selected.Poster} alt="Img" />
          <p>{selected.Plot}</p>
        </div>
        <button className="close" onClick={closePopUp}>Cerrar</button>
      </div>
    </section>
  )
}

export default PopUp
