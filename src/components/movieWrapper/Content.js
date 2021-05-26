import { Grid, CircularProgress } from "@material-ui/core";

import MovieCard from "./MovieCard";

const Content = ({ movies, setMovies }) => {
  return movies ? (
    <Grid container spacing={2}>
      {" "}
      {movies.map((movie, index) => {
        return (
          <MovieCard
            movie={movie}
            key={movie.id}
            setMovies={setMovies}
            movies={movies}
          />
        );
      })}
    </Grid>
  ) : (
    <CircularProgress
      variant="indeterminate"
      disableShrink
      size={40}
      thickness={4}
    />
  );
};

export default Content;
