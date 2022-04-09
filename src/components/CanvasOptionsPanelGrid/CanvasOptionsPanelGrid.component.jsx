import "./CanvasOptionsPanelGrid.styles.css";
import Slider from "../Slider/Slider.component";
import NumberForm from "../NumberForm/NumberForm.component";
import { useEffect, useState } from "react";
import setSelectedAngle from "../CanvasGrid/helpers/setSelectedAngle";
import setSelectedZoom from "../CanvasGrid/helpers/setSelectedZoom";
import setSelectedHorizontal from "../CanvasGrid/helpers/setSelectedHorizontal";
import setSelectedVertical from "../CanvasGrid/helpers/setSelectedVertical";
import ColorPicker from "../ColorPicker/ColorPicker.component";

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
        <div>Rotate Image:</div>
        <Slider
          value={sliderVals.rotationVal}
          onChange={handleRotationChange}
          min={-360}
          max={360}
          step={1}
          className={"options-slider"}
        />
        <NumberForm
          value={sliderVals.rotationVal}
          onChange={handleRotationChange}
          min={-360}
          max={360}
          step={1}
        />
      </div>
      <div className="canvas-options">
        <div>Zoom Image:</div>
        <Slider
          value={sliderVals.zoomVal}
          onChange={handleZoomChange}
          min={0.1}
          max={10}
          step={0.1}
          className={"options-slider"}
        ></Slider>
        <NumberForm
          value={sliderVals.zoomVal}
          onChange={handleZoomChange}
          min={0.1}
          max={10}
          step={0.1}
        />
      </div>
      <div className="canvas-options">
        <div>Horizontal Position:</div>
        <Slider
          value={sliderVals.horizontalVal}
          onChange={handleHorizontalChange}
          min={-500}
          max={500}
          step={1}
          className={"options-slider"}
        ></Slider>
        <NumberForm
          value={sliderVals.horizontalVal}
          onChange={handleHorizontalChange}
          min={-500}
          max={500}
          step={1}
        ></NumberForm>
      </div>
      <div className="canvas-options">
        <div>Vertical Position:</div>
        <Slider
          value={sliderVals.verticalVal}
          onChange={handleVerticalChange}
          min={-500}
          max={500}
          step={1}
          className={"options-slider"}
        ></Slider>
        <NumberForm
          value={sliderVals.verticalVal}
          onChange={handleVerticalChange}
          min={-500}
          max={500}
          step={1}
        ></NumberForm>
      </div>
      <ColorPicker onChange={handleFormChange} onSubmit={handleFormSubmit}></ColorPicker>
    </div>
  );
};

export default CanvasOptionsPanel;
