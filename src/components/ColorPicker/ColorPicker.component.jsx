import "./ColorPicker.styles.css";
import { useState } from "react";

const ColorPicker = (props) => {
  const [color, setColor] = useState("#000000");
  const handleColorChange = (e) => {
    e.preventDefault();
    props.onChange(e.target.value);
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(color);
  };

  return (
    <div className="ColorPicker">
      <form onSubmit={handleSubmit} className={`${props.className}`}>
        <label>{props.label ?? "Color: "}</label>
        <input type="color" value={color} onChange={handleColorChange} />
      </form>
    </div>
  );
};

export default ColorPicker;
