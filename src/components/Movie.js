import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import MovieContext from "../MovieContext";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { motion } from "framer-motion";
import defaultImage from "../assets/no-image.jpg";

function Movie({ movie }) {
  const { addToFavourites, isFav } = useContext(MovieContext);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="movie"
    >
      {isFav(movie.id) ? (
        <AiOutlineStar onClick={() => addToFavourites(movie)} />
      ) : (
        <AiFillStar onClick={() => addToFavourites(movie)} />
      )}
      <Link to={`/movie/${movie.id}`} key={movie.id}>
        <div className="shadow"></div>
      </Link>
      {movie.poster_path !== null ? (
        <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} />
      ) : (
        <img src={defaultImage} />
      )}
      <h2>{movie.title}</h2>
    </motion.div>
  );
}

export default Movie;
