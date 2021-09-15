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
  const [state1, setState1] = useState(initialState);
  const [state2, setState2] = useState(initialState);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  console.log(searchTerm);

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
      setState1((prev) => ({
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
      setState2((prev) => ({
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
    setState(initialState);
    fetchMovies(1, searchTerm);
    fetchNowMovies(1);
    fetchUpcomingMovies(1);
  }, [searchTerm]);

  return { state, state1, state2, loading, error, searchTerm, setSearchTerm };
};
