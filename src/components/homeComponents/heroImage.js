const HeroImage = ({ image, title }) => {
  return (
    <div className="heroSection">
      <img src={image} alt="recentMovie" />
      <div className="heroText">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default HeroImage;
