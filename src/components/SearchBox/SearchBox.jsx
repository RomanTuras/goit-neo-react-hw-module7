import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice.js";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleSearchInput = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.search}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        type="text"
        id="search"
        onChange={handleSearchInput}
        className={css.searchField}
      />
    </div>
  );
};

export default SearchBox;
