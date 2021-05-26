import { useState, useEffect } from "react";
import Content from "./Content";
import { movies$ } from "../../movie";

const MovieWrapper = () => {
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    movies$.then((res) => {
      console.log(res);
      setMovies(res);
    });
  }, []);

  return (
    <>
      <Content movies={movies} setMovies={setMovies} />
    </>
  );
};

export default MovieWrapper;
