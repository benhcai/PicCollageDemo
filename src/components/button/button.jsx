import "./styles.css";

const Button = (props) => {
  let styles = { cursor: "pointer" };
  if (props.allowed === false) styles = { ...styles, cursor: "not-allowed" };
  return (
    <button
      className={`button ${props.active ? "button--active" : ""}`}
      onClick={props.onClick}
      style={styles}
    >
      {props.children}
    </button>
  );
};

export default Button;
