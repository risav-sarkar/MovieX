const HeroImage = ({ image, title, desc }) => {
  return (
    <div className="heroSection">
      <img src={image} alt="" />
      <div className="heroText">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default HeroImage;
