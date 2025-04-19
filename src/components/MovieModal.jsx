function MovieModal({ details, onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2 className="modal-title">{details.Title}</h2>
        <p className="modal-plot"><strong>Plot:</strong> {details.Plot}</p>
        <p className="modal-actors"><strong>Cast:</strong> {details.Actors}</p>
        <p className="modal-rating"><strong>Rating:</strong> {details.imdbRating}</p>
        <button onClick={onClose} className="modal-close-button">
          Close
        </button>
      </div>
    </div>
  );
}

export default MovieModal;
