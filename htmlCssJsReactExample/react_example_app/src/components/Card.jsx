import styles from "./Card.module.css";
import sony from ".././assets/image/sony1.jpg";

const Button = {
  backgroundColor: "blue",
  color: "white",
  padding: "10px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
};


const Card = (props) => {
  return (
    <div className={styles.card}>
      <img src={props.image} alt="img" />
      <h2 style={{ backgroundColor: "red" }}>{props.name}</h2>
      <p>{props.price}</p>
      <span>{props.rating}</span>
      <br />
      <button style={Button}>Add to Cart</button>
    </div>
  );
};

Card.defaultProps = {
  image: sony,
};

export default Card;
