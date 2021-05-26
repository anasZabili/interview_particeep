import {
  Button,
  Grid,
  Typography,
  CardActions,
  CardContent,
  Card,
  CardHeader,
  CircularProgress,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  // root: {
  //   minWidth: 275,
  // },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Content = ({ movies, setMovies }) => {
  const classes = useStyles();

  return movies ? (
    <Grid container spacing={2}>
      {" "}
      {movies.map((movie, index) => {
        return (
          <Grid item xs={12} md={3} lg={3} key={movie.id}>
            <Card className={classes.root} variant="outlined">
              <CardHeader title={movie.title} />
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  ) : (
    <CircularProgress
      variant="indeterminate"
      disableShrink
      className={classes.top}
      classes={{
        circle: classes.circle,
      }}
      size={40}
      thickness={4}
    />
  );
};

export default Content;
