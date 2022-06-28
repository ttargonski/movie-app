import React, { useContext, useEffect } from "react";
import Movie from "./Movie";
import MovieContext from "../MovieContext";

import { motion } from "framer-motion";

const MoviesList = () => {
  const { filtered, fetchPopular } = useContext(MovieContext);

  useEffect(() => {
    fetchPopular();
  }, []);

  return (
    <>
      <motion.div layout className="popular-movies">
        {filtered.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </motion.div>
      {filtered.length === 0 && <p className="info">No movies to display</p>}
    </>
  );
};

export default MoviesList;
