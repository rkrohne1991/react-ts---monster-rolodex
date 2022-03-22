import classes from "./card-list.module.scss";

import { Monster } from "../../state/monster";
import Card from "../card/card.component";

interface CardListProps {
  monsters: Monster[];
}

const CardList: React.FC<CardListProps> = ({ monsters }) => (
  <div className={classes["card-list"]}>
    {monsters.map((monster) => (
      <Card
        key={monster.id}
        id={monster.id}
        name={monster.name}
        email={monster.email}
      />
    ))}
  </div>
);

export default CardList;
