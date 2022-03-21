import { Component } from "react";
import "./App.scss";

import CardList from "./components/card-list/card-list.component";
import { MonsterSearchProps } from "./state/monster";
import SearchBox from "./components/search-box/search-box.component";

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
        <h1 className="app-title">Monster Rolodex</h1>
        <SearchBox
          onSearchChange={onSearchChange}
          placeholder="Search monsters"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
