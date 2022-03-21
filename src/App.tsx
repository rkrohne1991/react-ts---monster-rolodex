import React, { Component } from "react";
import "./App.css";

interface AppProps {}
interface AppState {
  [key: string]: { name: string; id: string }[];
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      monsters: [
        {
          name: "Linda",
          id: "0",
        },
        {
          name: "Frank",
          id: "1",
        },
        {
          name: "Jacky",
          id: "2",
        },
        {
          name: "Andrei",
          id: "3",
        },
      ],
    };
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
