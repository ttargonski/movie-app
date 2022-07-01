import { useContext, useEffect } from "react";
import MovieContext from "../MovieContext";
import genres from "../genres";

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
      {genres && (
        <>
          <button
            className={activeGenre === 0 ? "active" : null}
            onClick={() => setActiveGenre(0)}
          >
            All
          </button>
          {genres.map((genre) => (
            <button
              key={genre.id}
              className={activeGenre === genre.id ? "active" : null}
              onClick={() => setActiveGenre(genre.id)}
            >
              {genre.name}
            </button>
          ))}
        </>
      )}
    </div>
  );
};

export default Filter;
