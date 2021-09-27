import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../config";
import { useMovieFetch } from "../hooks/useMovieFetch";
import { useParams } from "react-router";
import Spinner from "./spinner";
import HeroImage from "./heroImage";
import Grid from "./grid";
import Thumbnails from "./thumbnails";
import noImage from "../styles/noImage.png";

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
          image={
            state.backdrop_path
              ? `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.backdrop_path}`
              : `${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.poster_path}`
          }
        />
        <div className="movieDetailsContainer">
          <div className="blur"></div>
          <div className="movieDetails">
            <h1>{state.original_title}</h1>

            {state.tagline && <h3>"{state.tagline}"</h3>}

            <div className="movieSpecs">
              <h4>{state.release_date.substring(0, 4)}</h4>
              <div className="bar"></div>
              <h4>{`${Math.floor(state.runtime / 60)}h ${
                state.runtime % 60
              }m`}</h4>
              <div className="bar"></div>
              <div className="genres">
                {state.genres.map((e) => (
                  <h4 key={e.id}>{e.name}</h4>
                ))}
              </div>
            </div>

            <p>{state.overview}</p>

            <div className="movieSpecs">
              <h3>Directed By:</h3>
              {state.directors.map((e) => (
                <h3 key={e.id}>{e.name}</h3>
              ))}
            </div>

            <div className="movieSpecs">
              {state.homepage && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={state.homepage}
                >
                  <button className="visitBtn">Visit</button>
                </a>
              )}
              {state.imdb_id && (
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`https://www.imdb.com/title/${state.imdb_id}/`}
                >
                  <button className="imdbBtn">IMDb</button>
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="movieSecondary">
          <div className="blur"></div>
          <div className="movieGrids">
            <Grid header="Cast">
              {state.actors.map((movie) => (
                <Thumbnails
                  key={"search" + movie.id}
                  image={
                    movie.profile_path
                      ? IMAGE_BASE_URL + POSTER_SIZE + movie.profile_path
                      : noImage
                  }
                  title={movie.name}
                  role={movie.character}
                />
              ))}
            </Grid>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default Movie;
