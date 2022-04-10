import "./Button.styles.css";

const Button = (props) => {
  return (
    <button
      className={`
          ${props.className}
          button ${props.active ? "button--active" : ""} 
          ${props.allowed === false ? "button--not-allowed" : ""}
        `}
      onClick={props.onClick}
      disabled={props.allowed === false ? true : false}
    >
      {props.children}
    </button>
  );
};

export default Button;
