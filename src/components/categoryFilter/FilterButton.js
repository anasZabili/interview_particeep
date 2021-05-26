import { useState } from "react";
import {
  makeStyles,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const FilterButton = ({
  movies,
  setMovies,
  categoriesWithouteDuplicates,
  displayMovies,
  setDisplayMovies,
}) => {
  const classes = useStyles();
  const [category, setCategorie] = useState("");
  const [open, setOpen] = useState(false);

  const handleChange = (event) => {
    setCategorie(event.target.value);
    setDisplayMovies((prevState) => {
      const moviesClone = [...movies];
      if (!event.target.value) return moviesClone;
      const newState = moviesClone?.filter((value, index) => {
        console.log(
          "🚀 ~ file: FilterButton.js ~ line 36 ~ moviesClone?.filter ~ value",
          value
        );
        console.log(
          "🚀 ~ file: FilterButton.js ~ line 38 ~ moviesClone?.filter ~ category",
          category
        );
        return value.category === event.target.value;
      });
      return newState;
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          Categorie
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={category}
          onChange={handleChange}
        >
          <MenuItem value={null}>
            <em>Toute</em>
          </MenuItem>
          {categoriesWithouteDuplicates.map((value, index) => {
            return (
              <MenuItem value={value} key={index}>
                <em>{value}</em>
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterButton;
