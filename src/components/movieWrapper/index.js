import { useState, useEffect } from "react";
import Content from "./Content";
import { movies$ } from "../../movie";
import CategoryFilter from "../categoryFilter";

const MovieWrapper = () => {
  const [movies, setMovies] = useState(null);
  const [displayMovies, setDisplayMovies] = useState(movies);

  // Fetch des données au montage du composant
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

  // mise à jour des film affiché si la liste des film change (dans le cas
  // d'une suppression dans le cas de notre application)
  useEffect(() => {
    if (!movies || movies?.length === 0) return;
    if (!displayMovies || displayMovies?.length === 0) return;
    setDisplayMovies((prevState) => {
      const newState = prevState?.filter((value) => {
        return movies.some((valueMovies) => value.id === valueMovies.id);
      });
      return [...newState];
    });
  }, [movies]);

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
