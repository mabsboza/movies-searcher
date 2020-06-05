import React from 'react';

function Search({handleSearch, search}) {
  return (
    <section className="searchbox-wrap">
      <input type="text" 
      placeholder="Buscador" 
      className="searchbox" 
      onChange={handleSearch} 
      onKeyPress={search}
      />
    </section>
  )
}

export default Search
