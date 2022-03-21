import { Component } from "react";
import "./App.css";

import CardList from "./components/card-list/card-list.component";
import { MonsterSearchProps } from "./state/monster";

interface AppProps {}

class App extends Component<AppProps, MonsterSearchProps> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      searchField: "",
      monsters: [],
    };
  }

  componentDidMount() {
    // console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          }
          // () => console.log(this.state)
        )
      );
  }

  onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // console.log("render");

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
