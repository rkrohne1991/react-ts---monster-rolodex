import classes from "./spinner.module.scss";

const Spinner: React.FC = () => (
  <div className={classes["spinner-overlay"]}>
    <div className={classes["spinner-container"]} />
  </div>
);

export default Spinner;
