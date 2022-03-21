import { Component } from "react";
import "./App.css";

interface Monster {
  id: string;
  name: string;
}

interface MonsterSearchProps {
  monsters: Monster[];
  searchField: string;
}

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
    console.log("componentDidMount");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => console.log(this.state)
        )
      );
  }

  render() {
    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    console.log("render");
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search monsters"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const searchField = event.target.value.toLocaleLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
