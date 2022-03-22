import classes from "./card.module.scss";

interface CardProps {
  id: number;
  name: string;
  email: string;
}

const Card: React.FC<CardProps> = ({ id, name, email }) => (
  <div className={classes["card-container"]}>
    <img
      src={`https://robohash.org/${id}?set=set2&size=180x180`}
      alt={`monster ${name}`}
    />
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
);

export default Card;
