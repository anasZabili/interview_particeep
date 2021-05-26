import { useState, useEffect } from "react";
import Content from "./Content";
import { movies$ } from "../../movie";

const MovieWrapper = () => {
  const [movies, setMovies] = useState(null);
  console.log("🚀 ~ file: index.js ~ line 7 ~ MovieWrapper ~ movies", movies);
  useEffect(() => {
    movies$.then((res) => {
      // J'ajoute la Gestion des likes en ajoutant un champ isLike set à
      // false par defaut
      const moviesWithLike = res.map((movie) => {
        return { ...movie, isLike: false };
      });
      setMovies(moviesWithLike);
    });
  }, []);

  return (
    <>
      <Content movies={movies} setMovies={setMovies} />
    </>
  );
};

export default MovieWrapper;
