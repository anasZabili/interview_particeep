import { useState, useEffect } from "react";
import Content from "./Content";
import { movies$ } from "../../movie";
import CategoryFilter from "../categoryFilter";

const MovieWrapper = () => {
  const [movies, setMovies] = useState(null);
  const [displayMovies, setDisplayMovies] = useState(movies);
  console.log("🚀 ~ file: index.js ~ line 7 ~ MovieWrapper ~ movies", movies);
  useEffect(() => {
    movies$.then((res) => {
      // J'ajoute la Gestion des likes en ajoutant un champ isLike set à
      // false par defaut
      const moviesWithLike = res.map((movie) => {
        return { ...movie, isLike: false };
      });
      setMovies(moviesWithLike);
      setDisplayMovies(moviesWithLike);
    });
  }, []);

  return (
    <>
      {movies && (
        <CategoryFilter
          movies={movies}
          setMovies={setMovies}
          displayMovies={displayMovies}
          setDisplayMovies={setDisplayMovies}
        />
      )}
      <Content movies={displayMovies} setMovies={setMovies} />
    </>
  );
};

export default MovieWrapper;
