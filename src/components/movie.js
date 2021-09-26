import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../config";
import { useParams } from "react-router";
import Spinner from "./spinner";
import HeroImage from "./homeComponents/heroImage";
import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = () => {
  const { movieId } = useParams();
  const { state, loading, error } = useMovieFetch(movieId);
  console.log(state);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  if (Object.keys(state).length) {
    return (
      <div className="movie">
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.backdrop_path}`}
        />
        <div className="movieDetailsContainer">
          <div className="blur"></div>
          <div className="movieDetails">
            <h1>{state.original_title}</h1>
            <h3>"{state.tagline}"</h3>
            <div className="movieSpecs">
              <h4>{state.release_date.substring(0, 4)}</h4>
              <div className="bar"></div>
              <h4>{`${Math.floor(state.runtime / 60)}h ${
                state.runtime % 60
              }m`}</h4>
              <div className="bar"></div>
              {state.genres.map((e) => (
                <h4 key={e.id}>{e.name}</h4>
              ))}
            </div>
            <p>{state.overview}</p>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default Movie;
