import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../../api";
import "./ActorsDetails.css";
import { MovieContext } from "../../context";
import { translations } from "../../translation";

const ActorsDetails = () => {
  const { actorId } = useParams();
  const { lang } = useContext(MovieContext);

  const [actorsDetails, setActorsDetails] = useState({});
  const [bio, setBio] = useState(false);

  const t = translations[lang] || translations["en-US"];
  const biography = actorsDetails.biography || "";
  const shortLength = 310;

  async function getActorsDetails() {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/person/${actorId}?api_key=${API_KEY}&language=${lang}`,
      );
      setActorsDetails(res.data);
    } catch (error) {
      console.error("Ошибка загрузки актёра:", error);
    }
  }

  useEffect(() => {
    getActorsDetails();
  }, [actorId, lang]);

  useEffect(() => {
    setBio(false);
  }, [actorId, lang]);

  return (
    <div id="actorsDetails">
      <div className="container">
        <div className="actorsDetails">
          <img
            src={
              actorsDetails.profile_path
                ? `https://image.tmdb.org/t/p/w500${actorsDetails.profile_path}`
                : "/no-image.png"
            }
            alt={actorsDetails.name || "Actor"}
          />

          <div className="actorsText">
            <h1>{actorsDetails.name}</h1>

            <h2>{t.biographyTitle}</h2>

            {biography.length > 0 ? (
              <p>
                {bio || biography.length <= shortLength
                  ? biography
                  : `${biography.slice(0, shortLength)}...`}

                {biography.length > shortLength && (
                  <span className="readMore" onClick={() => setBio(!bio)}>
                    {bio ? t.hideBio : t.readMore}
                  </span>
                )}
              </p>
            ) : (
              <p className="noBiography">{t.noBiography}</p>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ActorsDetails;
