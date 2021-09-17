import { useState, useEffect } from "react";
import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [state, setState] = useState(initialState);
  const [moviesNow, setMoviesNow] = useState(initialState);
  const [moviesUp, setMoviesUp] = useState(initialState);
  const [isLoadingMoreState, setIsLoadingMoreState] = useState(false);
  const [isLoadingMoreMoviesNow, setIsLoadingMoreMoviesNow] = useState(false);
  const [isLoadingMoreMoviesUp, setIsLoadingMoreMoviesUp] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchTerm, page);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  const fetchNowMovies = async (page) => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchNowMovies(page);
      setMoviesNow((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  const fetchUpcomingMovies = async (page) => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchUpcomingMovies(page);
      setMoviesUp((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(1, searchTerm);
    fetchNowMovies(1);
    fetchUpcomingMovies(1);
  }, [searchTerm]);

  useEffect(() => {
    if (!isLoadingMoreState) return;
    fetchMovies(state.page + 1, searchTerm);
    setIsLoadingMoreState(false);
  }, [isLoadingMoreState, searchTerm, state.page]);

  useEffect(() => {
    if (!isLoadingMoreMoviesNow) return;
    fetchNowMovies(moviesNow.page + 1);
    setIsLoadingMoreMoviesNow(false);
  }, [isLoadingMoreMoviesNow, moviesNow.page]);

  useEffect(() => {
    if (!isLoadingMoreMoviesUp) return;
    fetchUpcomingMovies(moviesUp.page + 1);
    setIsLoadingMoreMoviesUp(false);
  }, [isLoadingMoreMoviesUp, moviesUp.page]);

  return {
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
  };
};
