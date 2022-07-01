import { useContext, useEffect, useState } from "react";
import MovieContext from "../MovieContext";
import genres from "../genres";
import { BiArrowFromRight } from "react-icons/bi";
import { MdMoreHoriz } from "react-icons/md";

const Filter = () => {
  const { setActiveGenre, activeGenre, setFiltered, movies, header } =
    useContext(MovieContext);

  const [moreGenres, setMoreGenres] = useState(false);

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
        className={activeGenre === 28 ? "active" : null}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
      <button
        className={activeGenre === 12 ? "active" : null}
        onClick={() => setActiveGenre(12)}
      >
        Adventure
      </button>
      {moreGenres &&
        genres.map((genre) => (
          <button
            key={genre.id}
            className={activeGenre === genre.id ? "active" : null}
            onClick={() => setActiveGenre(genre.id)}
          >
            {genre.name}
          </button>
        ))}
      <button className="more" onClick={() => setMoreGenres(!moreGenres)}>
        {moreGenres ? <BiArrowFromRight /> : <MdMoreHoriz />}
      </button>
    </div>
  );
};

export default Filter;
