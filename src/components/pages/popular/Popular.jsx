import React, { useContext, useEffect, useState } from "react";
import MovieCard from "../moviecard/MovieCard";
import { API_KEY } from "../../../api";
import axios from "axios";
import "./Popular.css";
import { MovieContext } from "../../context";

const Popular = () => {
  const [popular, setPopular] = useState([]);
  const { lang } = useContext(MovieContext);
  async function getPopular(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${lang}&page=1`,
    );
    setPopular(res.data.results);
    console.log(res.data.results);
  }
  useEffect(() => {
    getPopular(API_KEY);
  }, [lang]);
  return (
    <div className="popular">
      {popular.map((el) => (
        <div className="popularCard">
          <MovieCard el={el} />
        </div>
      ))}
    </div>
  );
};

export default Popular;
