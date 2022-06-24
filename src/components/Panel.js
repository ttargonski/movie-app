import React from "react";
import { MdOutlineMovieFilter } from "react-icons/md";
import { BiMoviePlay } from "react-icons/bi";
import { BsStars } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { MdMovie } from "react-icons/md";

import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";

import { useContext } from "react";
import MovieContext from "../MovieContext";

const Panel = ({ fetchPopular }) => {
  const { setHeader, header } = useContext(MovieContext);

  const setPopular = () => {
    fetchPopular();
    setHeader("Trending");
  };

  const setNowPlaying = () => {
    setHeader("Now playing");
  };

  const setTopRated = () => {
    setHeader("Top rated");
  };

  const setUncoming = () => {
    setHeader("Uncoming");
  };

  const setFavourites = () => {
    setHeader("Your favourites");
  };

  return (
    <div className="panel">
      <div>
        <MdOutlineMovieFilter
          className={header === "Trending" ? "active" : null}
          onClick={() => setPopular()}
        />
        <BiMoviePlay
          className={header === "Now playing" ? "active" : null}
          onClick={() => setNowPlaying()}
        ></BiMoviePlay>
        <BsStars
          className={header === "Top rated" ? "active" : null}
          onClick={() => setTopRated()}
        ></BsStars>
        <BiCameraMovie
          onClick={() => setUncoming()}
          className={header === "Uncoming" ? "active" : null}
        />
      </div>
      <div>
        <AiOutlineStar
          onClick={() => setFavourites()}
          className={header === "Your favourites" ? "active" : null}
        ></AiOutlineStar>
        <FaUserCircle></FaUserCircle>
      </div>
    </div>
  );
};

export default Panel;
