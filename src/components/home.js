import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import { useHomeFetch } from "../hooks/useHomeFetch";
import HeroImage from "./homeComponents/heroImage";
import Grid from "./grid";
import Thumbnails from "./thumbnails";

const Home = () => {
  const monthName = [
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
  // eslint-disable-next-line
  const { state, loading, error } = useHomeFetch();
  console.log(state);
  return (
    <div className="homeContainer">
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          desc={state.results[0].overview}
        />
      ) : null}
      <Grid header="Recent Movies">
        {state.results.map((movie) => (
          <Thumbnails
            key={movie.id}
            clickable
            image={IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}
            movieId={movie.id}
            title={movie.original_title}
            date={`${
              parseInt(movie.release_date.substring(8)) === 1
                ? `${parseInt(movie.release_date.substring(8))}st`
                : parseInt(movie.release_date.substring(8)) === 2
                ? `${parseInt(movie.release_date.substring(8))}nd`
                : parseInt(movie.release_date.substring(8)) === 3
                ? `${parseInt(movie.release_date.substring(8))}rd`
                : `${parseInt(movie.release_date.substring(8))}th`
            }, ${
              monthName[parseInt(movie.release_date.substring(5, 7))]
            }, ${movie.release_date.substring(0, 4)}`}
          />
        ))}
      </Grid>
    </div>
  );
};

export default Home;
