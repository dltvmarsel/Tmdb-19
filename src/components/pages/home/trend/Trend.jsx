import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_KEY } from "../../../../api";
import "./Trend.css";
import { MovieContext } from "../../../context";

const Trend = () => {
  const [popular, setPopular] = useState([]);
  const { lang } = useContext(MovieContext);

  async function getPopular(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${lang}&page=1`,
    );
    setPopular(res.data.results);
    console.log(res.data.results);
  }
  //   const rating = Math.round(el.vote_average * 10);
  useEffect(() => {
    getPopular(API_KEY);
  }, [lang]);
  return (
    <div id="trend">
      <div className="container">
        <div className="trend">
          {popular.map((el) => (
            <div className="trendCard">
              <Link to={`/movieDetails/${el.id}`} className="poster">
                <img
                  src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                  alt={el.title}
                />

                {/* <div className="rating" style={{ "--rating": `${rating}%` }}>
                  <span>{rating}%</span>
                </div> */}
              </Link>

              <h1>{el.title || el.original_title}</h1>
              <h4>{el.release_date}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trend;
