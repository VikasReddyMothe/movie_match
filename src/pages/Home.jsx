import { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import GenreFilter from '../components/GenreFilter';
import MovieCard from '../components/MovieCard';
import MovieModal from '../components/MovieModal';
import Header from '../components/Header';

function Home() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('Action');  // Default search term to load random movies
  const [selectedGenre, setSelectedGenre] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [modalMovie, setModalMovie] = useState(null);
  const [noResults, setNoResults] = useState(false);  // Track if no results are found

  const fetchMovies = async (term) => {
    const response = await fetch(`https://www.omdbapi.com/?s=${term}&apikey=3198f4ff`);
    const data = await response.json();

    if (data.Response === 'True') {
      setMovies(data.Search || []);
      setNoResults(false);  // Reset noResults when movies are found
    } else {
      setMovies([]);
      setNoResults(true);  // Set noResults to true if no movies are found
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    fetchMovies(term);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre);
    fetchMovies(genre);  // Fetch movies based on genre
  };

  const toggleFavorite = (movie) => {
    if (favorites.includes(movie)) {
      setFavorites(favorites.filter(fav => fav !== movie));
    } else {
      setFavorites([...favorites, movie]);
    }
  };

  const openModal = async (movie) => {
    const response = await fetch(`https://www.omdbapi.com/?i=${movie.imdbID}&apikey=3198f4ff`);
    const detailedData = await response.json();
    setModalMovie(detailedData);
  };

  const closeModal = () => {
    setModalMovie(null);
  };

  useEffect(() => {
    if (searchTerm) fetchMovies(searchTerm);  // Fetch movies if search term is set
  }, [searchTerm]);

  return (
    <div className="home-container">
      <Header />
      <SearchBar onSearch={handleSearch} />
      <GenreFilter genres={['Action', 'Comedy', 'Drama', 'horror', 'thriller', 'cartoon', 'love']} onSelectGenre={handleGenreSelect} />

      {noResults ? (
        <div className="no-results-message">No movies found</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              onMoreInfo={() => openModal(movie)}
              onToggleFavorite={toggleFavorite}
              isFavorite={favorites.includes(movie)}
            />
          ))}
        </div>
      )}

      {modalMovie && <MovieModal details={modalMovie} onClose={closeModal} />}
    </div>
  );
}

export default Home;
