import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { API_KEY } from "../../../api";
import "./Actors.css";

const Actors = ({ actorsId }) => {
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function getActors() {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${actorsId}/credits`,
          {
            params: {
              api_key: API_KEY,
              language: "ru-RU",
            },
          },
        );

        setActors(res.data.cast || []);
      } catch (error) {
        console.error(
          "Ошибка загрузки актёров:",
          error.response?.data || error.message,
        );
      }
    }

    if (actorsId) getActors();
  }, [actorsId]);

  return (
    <div className="container">
      <section className="actors">
        <h2>В главных ролях</h2>

        <div className="actorsList">
          {actors.slice(0, 14).map((actor) => (
            <div className="actorCard" key={actor.id}>
              <Link to={`/movieDetails/actorsDetails/${actor.id}`}>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w342${actor.profile_path}`
                      : "https://placehold.co/300x450?text=No+Photo"
                  }
                  alt={actor.name}
                />
              </Link>
              <div className="actorInfo">
                <h3>{actor.name}</h3>
                <p>{actor.character || "Персонаж не указан"}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Actors;
