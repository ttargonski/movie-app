import "./App.css";
import { Routes, Route } from "react-router-dom";
import Filter from "./components/Filter";
import Search from "./components/Search";
import Header from "./components/Header";
import Panel from "./components/Panel";
import MoviesList from "./components/MoviesList";
import { MovieProvider } from "./MovieContext";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <MovieProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Panel />
                <div className="container">
                  <Search />
                  <Filter />
                  <Header />
                  <MoviesList />
                </div>
              </>
            }
          />
          <Route path="/movie">
            <Route path=":movieId" element={<Details />} />
          </Route>
        </Routes>
      </MovieProvider>
    </div>
  );
}

export default App;
