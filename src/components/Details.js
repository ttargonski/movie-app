import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { useEffect, useContext } from "react";
import MovieContext from "../MovieContext";

const Details = () => {
  let params = useParams();

  const [movie, setMovie] = useState({});
  const { setHeader } = useContext(MovieContext);

  const fetchMovie = async (id) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b454aa11fb4b5fc5b515d2e80a898a1c&language=en-US`
    );
    const movie = await data.json();
    setMovie(movie);
  };

  useEffect(() => {
    fetchMovie(params.movieId);
  }, [movie]);

  return (
    <div>
      <div className="panel back">
        <Link to="/" onClick={() => setHeader("Trending")}>
          <MdArrowBack />
        </Link>
      </div>
      <div className="container">
        <h1 className="section-title">{movie.original_title}</h1>
        <div className="details">
          <img
            className="img-bg"
            src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
            alt=""
          />
          <div>
            <h4>Overview</h4>
            <p>{movie.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
