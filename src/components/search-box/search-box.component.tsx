import { Component } from "react";

interface SearchBoxProps {
  onSearchChange(event: React.ChangeEvent<HTMLInputElement>): void;
  placeholder: string;
  className: string;
}

class SearchBox extends Component<SearchBoxProps> {
  render() {
    const { onSearchChange, placeholder, className } = this.props;

    return (
      <div>
        <input
          className={className}
          type="search"
          placeholder={placeholder}
          onChange={onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;
