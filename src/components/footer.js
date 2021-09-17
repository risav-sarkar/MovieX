import Tmdb from "../styles/tmdb.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <div>
          <h1>MoviesX</h1>
          <p>A website where you can explore popular and upcoming movies!</p>
        </div>
        <div>
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
