import { useContext, useEffect } from "react";
import MovieContext from "../MovieContext";

const Filter = () => {
  const { setActiveGenre, activeGenre, setFiltered, movies, header } =
    useContext(MovieContext);

  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(movies);
    } else {
      const filtered = movies.filter((movie) =>
        movie.genre_ids.includes(activeGenre)
      );
      setFiltered(filtered);
    }
  }, [activeGenre, header]);

  return (
    <div className="filter-container">
      <button
        className={activeGenre === 0 ? "active" : null}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? "active" : null}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? "active" : null}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
    </div>
  );
};

export default Filter;
