import "./Slider.styles.css";

const Slider = (props) => {
  return (
    <input
      type="range"
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

export default Slider;
