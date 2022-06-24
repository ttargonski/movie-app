import "./App.css";
import { useEffect, useState } from "react";
import Movie from "./components/Movie";
import Filter from "./components/Filter";
import Search from "./components/Search";
import Header from "./components/Header";
import Panel from "./components/Panel";
import { motion } from "framer-motion";

// context
import { MovieProvider } from "./MovieContext";

function App() {
  const [movies, setMovies] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US&page=1"
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
  };

  const fetchSearch = async (query) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US&query=${query}&page=1&include_adult=false`
    );
    const movies = await data.json();
    setMovies(movies.results);
    setFiltered(movies.results);
  };

  return (
    <div className="App">
      <MovieProvider>
        <Panel fetchPopular={fetchPopular} />
        <div className="container">
          <Search fetchSearch={fetchSearch} fetchPopular={fetchPopular} />
          <Filter
            movies={movies}
            setFiltered={setFiltered}
            setActiveGenre={setActiveGenre}
            filtered={filtered}
            activeGenre={activeGenre}
          />
          <Header />
          <motion.div layout className="popular-movies">
            {filtered.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })}
          </motion.div>
        </div>
      </MovieProvider>
    </div>
  );
}

export default App;
