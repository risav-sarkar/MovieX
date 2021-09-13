const Thumbnails = ({ image, movieId, clickable, title, date }) => {
  return (
    <div className="thumb">
      <img src={image} alt="thumbnail" />
      <div className="textContainer">
        <p>{date}</p>
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Thumbnails;
