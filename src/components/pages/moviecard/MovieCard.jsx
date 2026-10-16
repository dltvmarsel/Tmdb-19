import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../../api";
import { Link } from "react-router-dom";

const MovieCard = ({ el }) => {
  const rating = Math.round(el.vote_average * 10);

  return (
    <div className="popularCard">
      <Link to={`/movieDetails/${el.id}`} className="poster">
        <img
          src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
          alt={el.title}
        />

        <div className="rating" style={{ "--rating": `${rating}%` }}>
          <span>{rating}%</span>
        </div>
      </Link>

      <h1>{el.title || el.original_title}</h1>
      <h4>{el.release_date}</h4>
    </div>
  );
};

export default MovieCard;
