import { createContext, useState } from "react";

const MovieContext = createContext();

export function MovieProvider({ children }) {
  const [header, setHeader] = useState("Trending");
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (id, title, path) => {
    let isOnArray = false;
    favourites.map((fav) => {
      if (fav.id === id) {
        isOnArray = true;
      }
    });

    if (isOnArray) {
      console.log("remove");
    } else {
      setFavourites((prevState) => [...prevState, { id, title, path }]);
    }

    console.log(favourites);
  };

  return (
    <MovieContext.Provider value={{ header, setHeader, addToFavourites }}>
      {children}
    </MovieContext.Provider>
  );
}

export default MovieContext;
