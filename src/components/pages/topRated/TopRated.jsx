import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../../api";
import MovieCard from "../moviecard/MovieCard";
import { MovieContext } from "../../context";

const TopRated = () => {
  const [topRated, setTopRated] = useState([]);
  const { lang } = useContext(MovieContext);

  async function getTopRated(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${lang}&page=1`,
    );
    setTopRated(res.data.results);
    console.log(res.data.results);
  }
  useEffect(() => {
    getTopRated(API_KEY);
  }, [lang]);
  return (
    <div className="popular">
      {topRated.map((el) => (
        <div className="popularCard">
          <MovieCard el={el} />
        </div>
      ))}
    </div>
  );
};

export default TopRated;
