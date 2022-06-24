import React from "react";
import { useContext } from "react";
import MovieContext from "../MovieContext";
import { motion } from "framer-motion";

function Movie({ movie }) {
  const { addToFavourites } = useContext(MovieContext);
  return (
    <motion.div
      onClick={() =>
        addToFavourites(movie.id, movie.title, movie.backdrop_path)
      }
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="movie"
    >
      <div className="shadow"></div>
      <img
        src={"https://image.tmdb.org/t/p/w500" + movie.backdrop_path}
        alt=""
      />
      <h2>{movie.title}</h2>
    </motion.div>
  );
}

export default Movie;
