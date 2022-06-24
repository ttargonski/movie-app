import React from "react";
import { useContext } from "react";
import MovieContext from "../MovieContext";

const Header = () => {
  const { header } = useContext(MovieContext);

  return <h1 className="section-title">{header}</h1>;
};

export default Header;
