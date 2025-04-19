import React from 'react';

function GenreFilter({ genres, onSelectGenre }) {
  return (
    <div className="genre-filter">
      {genres.map((genre, index) => (
        <button key={index} onClick={() => onSelectGenre(genre)} className="genre-button">
          {genre}
        </button>
      ))}
    </div>
  );
}

export default GenreFilter;
