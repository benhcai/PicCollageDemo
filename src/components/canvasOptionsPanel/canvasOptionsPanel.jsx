import "./styles.css";
import Slider from "../slider/slider";
import { useState } from "react";
import setSelectedAngle from "../canvas/hooks/setSelectedAngle";
import setSelectedZoom from "../canvas/hooks/setSelectedZoom";
import setSelectedHorizontal from "../canvas/hooks/setSelectedHorizontal";
import setSelectedVertical from "../canvas/hooks/setSelectedVertical";
import ColorPicker from "../colorPicker/colorPicker";

const CanvasOptionsPanel = ({ val, selectedGrid, grids, setGridProps, canvasRef }) => {
  // Handle Rotation slide
  const [rotationVal, setRotationVal] = useState(0);
  const handleRotationChange = (val) => {
    setSelectedAngle(val, selectedGrid, grids, setGridProps);
    setRotationVal(val);
  };

  // Handle Zoom slider
  const [zoomVal, setZoomVal] = useState(1);
  const handleZoomChange = (val) => {
    setSelectedZoom(val, selectedGrid, grids, setGridProps);
    setZoomVal(val);
  };

  // Handle Horizontal slider
  const [horizontalVal, setHorizontalVal] = useState(1);
  const handleHorizontalChange = (val) => {
    setSelectedHorizontal(val, selectedGrid, grids, setGridProps);
    setHorizontalVal(val);
  };

  // Handle Vertical slider
  const [verticalVal, setVerticalVal] = useState(1);
  const handleVerticalChange = (val) => {
    setSelectedVertical(val, selectedGrid, grids, setGridProps);
    setVerticalVal(val);
  };

  // Handle Color Picker
  const handleFormChange = (color) => {
    canvasRef.current.style.backgroundColor = `${color}`;
  };

  const handleFormSubmit = (color) => {
    canvasRef.current.style.backgroundColor = `${color}`;
  };

  return (
    <div className="CanvasOptionsPanel">
      <div className="canvas-options">
        Rotate Image: {rotationVal}
        <Slider
          value={rotationVal}
          onChange={(val) => handleRotationChange(val)}
          min={-360}
          max={360}
          step={1}
          className={"options-slider"}
        ></Slider>
      </div>

      <div className="canvas-options">
        <div>Zoom Image: {zoomVal}</div>
        <Slider
          value={zoomVal}
          onChange={handleZoomChange}
          min={0.1}
          max={10}
          step={0.1}
          className={"options-slider"}
        ></Slider>
      </div>

      <div className="canvas-options">
        <div>Horizontal Position: {horizontalVal}</div>
        <Slider
          value={horizontalVal}
          onChange={handleHorizontalChange}
          min={-200}
          max={200}
          step={1}
          className={"options-slider"}
        ></Slider>
      </div>

      <div className="canvas-options">
        <div>Vertical Position: {verticalVal}</div>
        <Slider
          value={verticalVal}
          onChange={handleVerticalChange}
          min={-200}
          max={200}
          step={1}
          className={"options-slider"}
        ></Slider>
      </div>
      <ColorPicker onChange={handleFormChange} onSubmit={handleFormSubmit}></ColorPicker>
    </div>
  );
};

export default CanvasOptionsPanel;
