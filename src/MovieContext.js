import { createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);
  const [header, setHeader] = useState("Trending");

  // localstorage state
  const [favourites, setFavourites] = useLocalStorage("fav", []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US&page=1"
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader("Trending");
    setActiveGenre(0);
  };

  const fetchSearch = async (query) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader(`Results for "${query}"`);
    setActiveGenre(0);
  };

  const fetchNowPlaying = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US&page=1"
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader("Now playing");
    setActiveGenre(0);
  };

  const fetchTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US&page=1"
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader("Top rated");
    setActiveGenre(0);
  };

  const fetchUncoming = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US&page=1"
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
    setHeader("Uncoming");
    setActiveGenre(0);
  };

  const addToFavourites = (movie) => {
    let isOnArray = false;
    favourites.map((fav) => {
      if (fav.id === movie.id) {
        isOnArray = true;
      }
    });

    if (isOnArray) {
      setFavourites(favourites.filter((fav) => fav.id !== movie.id));
    } else {
      setFavourites((prevState) => [...prevState, movie]);
    }
  };

  const getFavourites = () => {
    setMovies(favourites);
    setFiltered(favourites);
    setHeader("Your favourites");
    setActiveGenre(0);
  };

  const isFav = (id) => {
    let fav = favourites.filter((fav) => fav.id === id);
    return fav.length === 0 ? true : false;
  };

  return (
    <MovieContext.Provider
      value={{
        header,
        setHeader,
        addToFavourites,
        filtered,
        setFiltered,
        fetchPopular,
        movies,
        setMovies,
        activeGenre,
        setActiveGenre,
        fetchSearch,
        getFavourites,
        isFav,
        fetchNowPlaying,
        fetchTopRated,
        fetchUncoming,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
