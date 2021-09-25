import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import { useParams } from "react-router";
import Spinner from "./spinner";
import Grid from "./grid";
import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = () => {
  const { movieId } = useParams();
  const { state, loading, error } = useMovieFetch(movieId);
  console.log(state);
  return <div>Movie</div>;
};

export default Movie;
