import Tmdb from "../styles/tmdb.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="blur"></div>
      <div className="logo">
        <div>
          <h1>MoviesX.</h1>
          <p>A website where you can explore movies!</p>
        </div>
        <div className="tmdb">
          <img className="logoImage" src={Tmdb} alt="tmdbLogo" />
        </div>
      </div>
      <div className="name">
        <p>
          Made By{" "}
          <a
            href="http://risav-sarkar.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            Risav
          </a>{" "}
          with ♡
        </p>
      </div>
    </div>
  );
};

export default Footer;
