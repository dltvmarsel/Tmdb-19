import React, { useEffect, useState } from "react";
import { MovieContext } from ".";

const RootContext = ({ children }) => {
  const [lang, setLang] = useState("ru-RU");
  const [dark, setDark] = useState(false);

  const [favorite, setFavorite] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("favorite")) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  return (
    <MovieContext.Provider
      value={{
        lang,
        setLang,
        dark,
        setDark,
        favorite,
        setFavorite,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default RootContext;
