import React, { useContext } from "react";
import Header from "./components/layout/header/Header";
import { Route, Routes } from "react-router-dom";
import Popular from "./components/pages/popular/Popular";
import TopRated from "./components/pages/topRated/TopRated";
import Favorite from "./components/pages/favorite/Favorite";
import MovieDetails from "./components/pages/movieDetails/MovieDetails";
import ActorsDetails from "./components/pages/Actorsdetails/ActorsDetails";
import Home from "./components/pages/home/Home";
import Search from "./components/pages/search/Search";
import { MovieContext } from "./components/context";
import Footer from "./components/layout/footer/Footer";

const App = () => {
  const { dark } = useContext(MovieContext);

  return (
    <div
      className="app"
      style={{
        minHeight: "100vh",
        background: dark ? "black" : "white",
        color: dark ? "white" : "black",
      }}
    >
      <Header />
      <Routes>
        <Route path="/popular" element={<Popular />} />
        <Route path="/topRated" element={<TopRated />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/movieDetails/:movieId" element={<MovieDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/search/:kinoName" element={<Search />} />
        <Route
          path="/movieDetails/actorsDetails/:actorId"
          element={<ActorsDetails />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
