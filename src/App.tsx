import { Component } from "react";
import "./App.css";

interface Monster {
  id: string;
  name: string;
}

interface MonsterProps {
  monsters: Monster[];
}

interface AppProps {}

class App extends Component<AppProps, MonsterProps> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
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
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
