import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import { useHomeFetch } from "../hooks/useHomeFetch";
import Spinner from "./spinner";
import HeroImage from "./heroImage";
import Grid from "./grid";
import Thumbnails from "./thumbnails";
import Searchbar from "./searchbar";
import Button from "./button";
import noImage from "../styles/noImage.png";
import { useEffect, useState } from "react";

const Home = () => {
  const {
    state,
    moviesNow,
    moviesUp,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    setIsLoadingMoreState,
    setIsLoadingMoreMoviesNow,
    setIsLoadingMoreMoviesUp,
  } = useHomeFetch();

  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      slide === 5 ? setSlide(0) : setSlide(slide + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, [slide]);

  if (error) return <h1>Something Went Wrong</h1>;

  return (
    <>
      {state.results[slide] && !searchTerm ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[slide].backdrop_path}`}
          title={state.results[slide].original_title}
          animation={1}
        />
      ) : state.results[0] && searchTerm ? (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          animation={0}
        />
      ) : null}

      {!searchTerm ? (
        <div className="gridContainer">
          <div className="gridContent">
            <div className="blur"></div>
            <Searchbar setSearchTerm={setSearchTerm} />
            <div className="homeGrid">
              <Grid header="Now Playing">
                {moviesNow.results.map((movie) => (
                  <Thumbnails
                    key={"nowPlaying" + movie.id}
                    clickable
                    image={
                      movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : noImage
                    }
                    movieId={movie.id}
                    title={movie.original_title}
                    date={movie.release_date}
                  />
                ))}
                {loading && <Spinner />}
                {moviesNow.page < moviesNow.total_pages && !loading && (
                  <Button
                    text="Load"
                    callback={() => setIsLoadingMoreMoviesNow(true)}
                  />
                )}
              </Grid>

              <Grid header="Popular Movies">
                {state.results.map((movie) => (
                  <Thumbnails
                    key={"movie" + movie.id}
                    clickable
                    image={
                      movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : noImage
                    }
                    movieId={movie.id}
                    title={movie.original_title}
                    date={movie.release_date}
                  />
                ))}
                {loading && <Spinner />}
                {state.page < state.total_pages && !loading && (
                  <Button
                    text="Load"
                    callback={() => setIsLoadingMoreState(true)}
                  />
                )}
              </Grid>

              <Grid header="Upcoming">
                {moviesUp.results.map((movie) => (
                  <Thumbnails
                    key={"up" + movie.id}
                    clickable
                    image={
                      movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : noImage
                    }
                    movieId={movie.id}
                    title={movie.original_title}
                    date={movie.release_date}
                  />
                ))}

                {loading && <Spinner />}
                {moviesUp.page < moviesUp.total_pages && !loading && (
                  <Button
                    text="Load"
                    callback={() => setIsLoadingMoreMoviesUp(true)}
                  />
                )}
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
                    key={"search" + movie.id}
                    clickable
                    image={
                      movie.poster_path
                        ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                        : noImage
                    }
                    movieId={movie.id}
                    title={movie.original_title}
                    date={movie.release_date}
                  />
                ))}
              </Grid>
              {loading && <Spinner />}
              {state.page < state.total_pages && !loading && (
                <Button
                  text="Load"
                  callback={() => setIsLoadingMoreState(true)}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
