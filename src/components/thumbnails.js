import { Link } from "react-router-dom";

const Thumbnails = ({ image, movieId, clickable, title, date }) => {
  const monthName = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    <div className="thumb">
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img src={image} alt="thumbnail" />
        </Link>
      ) : (
        <img src={image} alt="thumbnail" />
      )}

      <div className="textContainer">
        <h1>{title}</h1>
        <p>
          {date
            ? `${monthName[parseInt(date.substring(5, 7))]} ${
                parseInt(date.substring(8)) === 1
                  ? `${parseInt(date.substring(8))}st`
                  : parseInt(date.substring(8)) === 2
                  ? `${parseInt(date.substring(8))}nd`
                  : parseInt(date.substring(8)) === 3
                  ? `${parseInt(date.substring(8))}rd`
                  : `${parseInt(date.substring(8))}th`
              }, ${date.substring(0, 4)}`
            : null}
        </p>
      </div>
    </div>
  );
};

export default Thumbnails;
