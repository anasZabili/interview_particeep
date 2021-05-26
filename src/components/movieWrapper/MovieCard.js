import { useMemo } from "react";
import {
  Grid,
  Typography,
  CardActions,
  CardContent,
  Card,
  CardHeader,
  LinearProgress,
  makeStyles,
  IconButton,
} from "@material-ui/core";

import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  linearProgress: {
    marginTop: 50,
  },
});

const MovieCard = ({ movie, setMovies }) => {
  const classes = useStyles();
  const totalLike = movie.likes + movie.dislikes;
  const likeProportion = useMemo(
    () => (movie.likes / totalLike) * 100,
    [movie.likes, totalLike]
  );

  const handleLike = () => {
    setMovies((prevState) => {
      const movieToLike = prevState.find((value) => value.id === movie.id);
      movieToLike.isLike = !movieToLike.isLike;
      movieToLike.likes = movieToLike.isLike
        ? movieToLike.likes + 1
        : movieToLike.likes - 1;
      return [...prevState];
    });
  };
  const handleDelete = () => {
    setMovies((prevState) => {
      const newState = prevState.filter((value) => {
        return value.id !== movie.id;
      });
      return [...newState];
    });
  };

  return (
    <Grid item xs={12} md={4} lg={3}>
      <Card className={classes.root} variant="outlined">
        <CardHeader title={movie.title} />
        <CardContent>
          <Typography>{movie.category}</Typography>
          <LinearProgress
            variant="determinate"
            className={classes.linearProgress}
            value={likeProportion}
          />
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Supprimer" onClick={handleDelete}>
            <DeleteIcon color="error" />
          </IconButton>
          <IconButton aria-label="Like" onClick={handleLike}>
            {movie.isLike ? <FavoriteIcon color="error" /> : <FavoriteIcon />}
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default MovieCard;
