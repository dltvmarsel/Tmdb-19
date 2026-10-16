import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../../api";
import "./Videos.css";

const Videos = () => {
  const { movieId } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          {
            params: {
              api_key: API_KEY,
              language: "en-US",
            },
          },
        );

        const trailers = res.data.results.filter(
          (video) =>
            video.site === "YouTube" &&
            (video.type === "Trailer" || video.type === "Teaser"),
        );

        setVideos(trailers.slice(0, 4));
      } catch (error) {
        console.error("Ошибка загрузки видео:", error);
      }
    };

    if (movieId) getVideos();
  }, [movieId]);

  return (
    <div className="container">
      <section className="videos">
        <h2>Трейлеры и видео</h2>

        {videos.length > 0 ? (
          <div className="videosList">
            {videos.map((video) => (
              <div className="videoCard" key={video.id}>
                <iframe
                  src={`https://www.youtube.com/embed/${video.key}`}
                  title={video.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
                <h3>{video.name}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p>Трейлеры не найдены.</p>
        )}
      </section>
    </div>
  );
};

export default Videos;
