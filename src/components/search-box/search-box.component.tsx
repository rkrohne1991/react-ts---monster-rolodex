import { Component } from "react";
import classes from "./search-box.module.scss";

interface SearchBoxProps {
  onSearchChange(event: React.ChangeEvent<HTMLInputElement>): void;
  placeholder: string;
}

class SearchBox extends Component<SearchBoxProps> {
  render() {
    const { onSearchChange, placeholder } = this.props;

    return (
      <div>
        <input
          className={classes["search-box"]}
          type="search"
          placeholder={placeholder}
          onChange={onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
