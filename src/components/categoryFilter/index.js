import FilterButton from "./FilterButton";

const categoryFilter = ({
  movies,
  setMovies,
  displayMovies,
  setDisplayMovies,
}) => {
  const categoriesFromMovies = movies.map((value) => value.category);
  const categoriesWithouteDuplicates = [...new Set(categoriesFromMovies)];
  return (
    <FilterButton
      movies={movies}
      categoriesWithouteDuplicates={categoriesWithouteDuplicates}
      setMovies={setMovies}
      displayMovies={displayMovies}
      setDisplayMovies={setDisplayMovies}
    />
  );
};

export default categoryFilter;
