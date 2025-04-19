function MovieCard({ movie, onMoreInfo, onToggleFavorite, isFavorite }) {
  return (
    <div className="movie-card">
      <img src={movie.Poster} alt={movie.Title} className="movie-poster" />
      <div className="movie-info">
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
        <div className="movie-actions">
          <button onClick={onMoreInfo} className="movie-info-button">
            More Info
          </button>
          <button onClick={() => onToggleFavorite(movie)} className="movie-favorite">
            {isFavorite ? '💔' : '❤️'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
