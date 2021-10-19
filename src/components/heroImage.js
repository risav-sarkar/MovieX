const HeroImage = ({ image, title, animation }) => {
  return (
    <div className={`heroSection${animation === 1 ? " animateslide" : ""}`}>
      <img src={image} alt="" />
      <div className="heroText">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default HeroImage;
