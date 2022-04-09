import "./CanvasOptionsPanelIndex.styles.css";
import Slider from "../Slider/Slider.component";
import { useEffect, useState } from "react";
import setSelectedAngle from "./setSelectedSlider/setSelectedAngle";
import setSelectedZoom from "./setSelectedSlider/setSelectedZoom";
import setSelectedHorizontal from "./setSelectedSlider/setSelectedHorizontal";
import setSelectedVertical from "./setSelectedSlider/setSelectedVertical";
import ColorPicker from "../ColorPicker/ColorPicker.component";
import NumberForm from "../NumberForm/NumberForm.component";

const CanvasOptionsPanel = ({
  canvasRef,
  sliderVals,
  sliderSetVals,
  selectedIndex,
  setGridPropsId,
  setGridsColor,
}) => {
  // Handle Rotation slide
  const handleRotationChange = (val) => {
    setSelectedAngle(val, selectedIndex, setGridPropsId);
    sliderSetVals.setRotationVal(val);
  };

  // Handle Zoom slider
  const handleZoomChange = (val) => {
    setSelectedZoom(val, selectedIndex, setGridPropsId);
    sliderSetVals.setZoomVal(val);
  };

  // Handle Horizontal slider
  const handleHorizontalChange = (val) => {
    setSelectedHorizontal(val, selectedIndex, setGridPropsId);
    sliderSetVals.setHorizontalVal(val);
  };

  // Handle Vertical slider
  const handleVerticalChange = (val) => {
    setSelectedVertical(val, selectedIndex, setGridPropsId);
    sliderSetVals.setVerticalVal(val);
  };

  // Handle Color Picker
  const handleColorChange = (color) => {
    canvasRef.current.style.backgroundColor = `${color}`;
  };

  const handleColorSubmit = (color) => {
    canvasRef.current.style.backgroundColor = `${color}`;
  };

  const handleGridsColorChange = (color) => {
    setGridsColor(color);
  };

  const handleGridsColorSubmit = (color) => {
    setGridsColor(color);
  };

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
      <ColorPicker
        label={"Background Color: "}
        onChange={handleColorChange}
        onSubmit={handleColorSubmit}
        className={"canvas-options"}
      ></ColorPicker>
      <ColorPicker
        label={"Grid Color: "}
        onChange={handleGridsColorChange}
        onSubmit={handleGridsColorSubmit}
        className={"canvas-options"}
      ></ColorPicker>
    </div>
  );
};

export default CanvasOptionsPanel;
