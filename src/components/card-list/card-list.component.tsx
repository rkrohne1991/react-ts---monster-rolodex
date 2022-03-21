import { Component } from "react";
import { Monster } from "../../state/monster";

interface CardListProps {
  monsters: Monster[];
}

class CardList extends Component<CardListProps> {
  render() {
    const { monsters } = this.props;

    return (
      <div>
        {monsters.map((monster) => (
          <h1 key={monster.id}>{monster.name}</h1>
        ))}
      </div>
    );
  }
}

export default CardList;
