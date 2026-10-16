import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../../api";
import MovieCard from "../moviecard/MovieCard";

const Search = () => {
  const [search, setSearch] = useState([]);
  const { kinoName } = useParams();
  async function getSearch(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${kinoName}`,
    );
    setSearch(res.data.results);
  }
  useEffect(() => {
    getSearch(API_KEY);
  }, [kinoName]);
  return (
    <div className="popular">
      {search.map((el) => (
        <div className="popularCard">
          <MovieCard el={el} />
        </div>
      ))}
    </div>
  );
};

export default Search;
