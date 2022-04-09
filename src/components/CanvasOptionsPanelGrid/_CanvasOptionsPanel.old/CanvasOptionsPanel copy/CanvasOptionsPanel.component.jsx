import "./CanvasOptionsPanel.styles.css";
import Slider from "../../../Slider/Slider.component";
import { useEffect, useState } from "react";
import setSelectedAngle from "../../../CanvasGrid/helpers/setSelectedAngle";
import setSelectedZoom from "../../../CanvasGrid/helpers/setSelectedZoom";
import setSelectedHorizontal from "../../../CanvasGrid/helpers/setSelectedHorizontal";
import setSelectedVertical from "../../../CanvasGrid/helpers/setSelectedVertical";
import ColorPicker from "../../../ColorPicker/ColorPicker.component";

const CanvasOptionsPanel = ({
  selectedGrid,
  grids,
  setGridProps,
  canvasRef,
  sliderVals,
  sliderSetVals,
}) => {
  // Handle Rotation slide
  // const [rotationVal, setRotationVal] = useState(0);
  const handleRotationChange = (val) => {
    setSelectedAngle(val, selectedGrid, grids, setGridProps);
    sliderSetVals.setRotationVal(val);
  };

  // Handle Zoom slider
  // const [zoomVal, setZoomVal] = useState(1);
  const handleZoomChange = (val) => {
    setSelectedZoom(val, selectedGrid, grids, setGridProps);
    sliderSetVals.setZoomVal(val);
  };

  // Handle Horizontal slider
  // const [horizontalVal, setHorizontalVal] = useState(1);
  const handleHorizontalChange = (val) => {
    setSelectedHorizontal(val, selectedGrid, grids, setGridProps);
    sliderSetVals.setHorizontalVal(val);
  };

  // Handle Vertical slider
  // const [verticalVal, setVerticalVal] = useState(1);
  const handleVerticalChange = (val) => {
    setSelectedVertical(val, selectedGrid, grids, setGridProps);
    sliderSetVals.setVerticalVal(val);
  };

  // Handle Color Picker
  const handleFormChange = (color) => {
    canvasRef.current.style.backgroundColor = `${color}`;
  };

  const handleFormSubmit = (color) => {
    canvasRef.current.style.backgroundColor = `${color}`;
  };

  // console.log(rotationVal);

  return (
    <div className="CanvasOptionsPanel">
      <div className="canvas-options">
        Rotate Image: {sliderVals.rotationVal}
        <Slider
          value={sliderVals.rotationVal}
          onChange={(val) => handleRotationChange(val)}
          min={-360}
          max={360}
          step={1}
          className={"options-slider"}
        ></Slider>
      </div>

      <div className="canvas-options">
        <div>Zoom Image: {sliderVals.zoomVal}</div>
        <Slider
          value={sliderVals.zoomVal}
          onChange={handleZoomChange}
          min={0.1}
          max={10}
          step={0.1}
          className={"options-slider"}
        ></Slider>
      </div>

      <div className="canvas-options">
        <div>Horizontal Position: {sliderVals.horizontalVal}</div>
        <Slider
          value={sliderVals.horizontalVal}
          onChange={handleHorizontalChange}
          min={-500}
          max={500}
          step={1}
          className={"options-slider"}
        ></Slider>
      </div>

      <div className="canvas-options">
        <div>Vertical Position: {sliderVals.verticalVal}</div>
        <Slider
          value={sliderVals.verticalVal}
          onChange={handleVerticalChange}
          min={-500}
          max={500}
          step={1}
          className={"options-slider"}
        ></Slider>
      </div>
      <ColorPicker onChange={handleFormChange} onSubmit={handleFormSubmit}></ColorPicker>
    </div>
  );
};

export default CanvasOptionsPanel;
