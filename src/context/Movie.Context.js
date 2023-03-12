import { createContext, useContext, useEffect, useState } from "react";
import { Trending_URL } from "../MovieAPI";

const MovieContext = createContext(null);

export const useMovieContext = () => useContext(MovieContext);

export default function MovieProvider({ children }) {
  const movieValue = {};

  return (
    <MovieContext.Provider value={movieValue}>{children}</MovieContext.Provider>
  );
}
