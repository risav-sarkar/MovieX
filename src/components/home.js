import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import { useHomeFetch } from "../hooks/useHomeFetch";
import Spinner from "./spinner";
import HeroImage from "./homeComponents/heroImage";
import Grid from "./grid";
import Thumbnails from "./thumbnails";
import Searchbar from "./homeComponents/searchbar";

const Home = () => {
  // eslint-disable-next-line
  const { state, state1, state2, loading, error, searchTerm, setSearchTerm } =
    useHomeFetch();
  console.log(state);
  console.log(state1);
  return (
    <>
      {state.results[0] ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          desc={state.results[0].overview}
        />
      ) : null}
      {!searchTerm ? (
        <div className="gridContainer">
          <div className="gridContent">
            <div className="blur"></div>
            <Searchbar setSearchTerm={setSearchTerm} />
            <div className="homeGrid">
              <Grid header="Now Playing">
                {state1.results.map((movie) => (
                  <Thumbnails
                    key={movie.id}
                    clickable
                    image={IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}
                    movieId={movie.id}
                    title={movie.original_title}
                    date={movie.release_date}
                  />
                ))}
                <Spinner />
              </Grid>

              <Grid header="Popular Movies">
                {state.results.map((movie) => (
                  <Thumbnails
                    key={movie.id}
                    clickable
                    image={IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}
                    movieId={movie.id}
                    title={movie.original_title}
                    date={movie.release_date}
                  />
                ))}
                <Spinner />
              </Grid>

              <Grid header="Upcoming">
                {state2.results.map((movie) => (
                  <Thumbnails
                    key={movie.id}
                    clickable
                    image={IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}
                    movieId={movie.id}
                    title={movie.original_title}
                    date={movie.release_date}
                  />
                ))}
                <Spinner />
              </Grid>
            </div>
          </div>
        </div>
      ) : (
        <div className="gridContainer">
          <div className="gridContent">
            <div className="blur"></div>
            <Searchbar setSearchTerm={setSearchTerm} />
            <div className="searchGrid">
              <Grid header="Results">
                {state.results.map((movie) => (
                  <Thumbnails
                    key={movie.id}
                    clickable
                    image={IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path}
                    movieId={movie.id}
                    title={movie.original_title}
                    date={movie.release_date}
                  />
                ))}
                <Spinner />
              </Grid>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
