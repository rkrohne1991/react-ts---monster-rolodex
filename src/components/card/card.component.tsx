import { Component } from "react";
import classes from "./card.module.scss";

interface CardProps {
  id: number;
  name: string;
  email: string;
}

class Card extends Component<CardProps> {
  render() {
    const { id, name, email } = this.props;

    return (
      <div className={classes["card-container"]}>
        <img
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
          alt={`monster ${name}`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
