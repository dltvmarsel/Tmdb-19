import React, { useContext, useState } from "react";
import "./Home.css";
import Trend from "./trend/Trend";
import { useNavigate } from "react-router-dom";
import { MovieContext } from "../../context";
import { translations } from "../../translation";

const Home = () => {
  const { lang } = useContext(MovieContext);
  const [movieName, setMovieName] = useState("");
  const nav = useNavigate();

  const t = translations[lang] || translations["ru-RU"];

  const searchMovie = () => {
    if (movieName.trim() === "") {
      alert("Напишите название фильма, сериала!");
    } else {
      nav(`/search/${movieName}`);
      setMovieName("");
    }
  };

  return (
    <>
      <div
        id="home"
        style={{
          backgroundImage:
            "url('https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/hpBGCnzOvdtQoMyE48gvwp2y5yx.jpg')",
        }}
      >
        <div className="container">
          <div className="home">
            <h1>{t.welcome}</h1>

            <h3>{t.description}</h3>

            <input
              type="text"
              value={movieName}
              placeholder={t.heroPlaceholder}
              onChange={(e) => setMovieName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") searchMovie();
              }}
            />

            <button onClick={searchMovie}>{t.searchButton}</button>
          </div>
        </div>
      </div>
      <Trend />
    </>
  );
};

export default Home;
