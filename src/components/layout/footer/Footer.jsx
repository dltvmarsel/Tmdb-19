import React, { useContext } from "react";
import { MovieContext } from "../../context";
import { translations } from "../../translation";
import "./Footer.css";
import footerLogo from "../../assets/tmdb footer logo.svg";

const Footer = () => {
  const { lang } = useContext(MovieContext);
  const t = translations[lang] || translations["en-US"];
  const footer = t.footer;

  return (
    <footer id="footer">
      <div className="footer">
        <div className="footerLogo">
          <img src={footerLogo} alt="" />
        </div>

        <div className="footerColumn">
          <h3>{footer.basics}</h3>
          <a href="https://www.themoviedb.org/about">{footer.about}</a>
          <a href="https://developer.themoviedb.org/docs">{footer.api}</a>
          <a href="https://www.themoviedb.org/api-for-business">
            {footer.business}
          </a>
          <a href="https://status.themoviedb.org/">{footer.status}</a>
        </div>

        <div className="footerColumn">
          <h3>{footer.participate}</h3>
          <a href="https://www.themoviedb.org/bible">{footer.editors}</a>
          <a href="https://www.themoviedb.org/movie/new">{footer.addMovie}</a>
          <a href="https://www.themoviedb.org/tv/new">{footer.addSeries}</a>
        </div>

        <div className="footerColumn">
          <h3>{footer.community}</h3>
          <a href="https://www.themoviedb.org/documentation/api">
            {footer.guides}
          </a>
          <a href="https://www.themoviedb.org/leaderboard">{footer.honor}</a>
          <a href="https://www.themoviedb.org/talk">{footer.support}</a>
        </div>

        <div className="footerColumn">
          <h3>{footer.legal}</h3>
          <a href="https://www.themoviedb.org/terms-of-use">{footer.terms}</a>
          <a href="https://www.themoviedb.org/api-terms-of-use">
            {footer.apiTerms}
          </a>
          <a href="https://www.themoviedb.org/privacy-policy">
            {footer.privacy}
          </a>
          <a href="https://www.themoviedb.org/dmca-policy">{footer.dmca}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
