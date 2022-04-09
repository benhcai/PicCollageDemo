import "./NumberForm.styles.css";

const NumberForm = (props) => {
  return (
    <input
      type="number"
      min={props.min}
      max={props.max}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      step={props.step}
      style={{ ...props.style }}
      className={`${props.className}`}
    />
  );
};

export default NumberForm;
