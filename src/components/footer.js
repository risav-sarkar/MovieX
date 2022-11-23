import Tmdb from "../styles/tmdb.svg";
import Logo from "../styles/2.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="blur"></div>
      <div className="logo">
        <div>
          <div className="logoContainer">
            <img src={Logo} alt="Logo" />
            <h1>MoviesX</h1>
          </div>
          <p>A website where you can explore movies!</p>
        </div>
        <div className="tmdb">
          <img className="logoImage" src={Tmdb} alt="tmdbLogo" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
