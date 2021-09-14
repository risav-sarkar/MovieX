const Thumbnails = ({ image, movieId, clickable, title, date }) => {
  return (
    <div className="thumb">
      <img src={image} alt="thumbnail" />
      <div className="textContainer">
        <h1>{title}</h1>
        <p>{date}</p>
      </div>
    </div>
  );
};

export default Thumbnails;
