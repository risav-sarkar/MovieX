// eslint-disable-next-line
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useParams } from "react-router";
// eslint-disable-next-line
import Spinner from "./spinner";
// eslint-disable-next-line
import Grid from "./grid";
import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = () => {
  const { movieId } = useParams();
  // eslint-disable-next-line
  const { state, loading, error } = useMovieFetch(movieId);
  console.log(state);
  return <div>Movie</div>;
};

export default Movie;
