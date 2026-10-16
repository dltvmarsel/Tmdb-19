import React, { useContext, useState } from "react";
import headerLogo from "../../assets/tmdb header.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "./Header.css";
import { MovieContext } from "../../context";
import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { translations } from "../../translation";

const Header = () => {
  const { lang, setLang, setDark, dark } = useContext(MovieContext);
  const [movieName, setMovieName] = useState("");
  const nav = useNavigate();

  const t = translations[lang] || translations["en-US"];

  const searchMovie = () => {
    if (movieName.trim() === "") {
      alert("Напишите название фильма, сериала!");
    } else {
      nav(`/search/${movieName}`);
      setMovieName("");
    }
  };
  return (
    <header id="header">
      <div className="container">
        <div className="header">
          <Link to="/">
            <img width="230px" src={headerLogo} alt="TMDB" />
          </Link>

          <div className="headerLeft">
            <Link to="/popular">{t.popular}</Link>
            <Link to="/topRated">{t.topRated}</Link>
            <Link to="/favorite">{t.favorites}</Link>
          </div>

          <div className="icons">
            <Link
              className="dark"
              to="#"
              onClick={(e) => {
                e.preventDefault();
                setDark(!dark);
              }}
            >
              {dark ? <MdDarkMode /> : <IoSunny />}
            </Link>
          </div>

          <div className="headerRight">
            <select value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="en-US">EN</option>
              <option value="ru-RU">RU</option>
            </select>

            <input
              type="text"
              value={movieName}
              placeholder={t.searchPlaceholder}
              onChange={(e) => setMovieName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") searchMovie();
              }}
            />

            <a onClick={searchMovie}>
              <FaSearch />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
