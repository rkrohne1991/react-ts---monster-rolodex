import classes from "./search-box.module.scss";

interface SearchBoxProps {
  onSearchChange(event: React.ChangeEvent<HTMLInputElement>): void;
  placeholder: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  onSearchChange,
  placeholder,
}) => (
  <div>
    <input
      className={classes["search-box"]}
      type="search"
      placeholder={placeholder}
      onChange={onSearchChange}
    />
  </div>
);
export default SearchBox;
