import "./CanvasOptionsPanelByIndex.styles.css";
import Slider from "../../Slider/Slider.component";
import ColorPicker from "../../ColorPicker/ColorPicker.component";
import NumberForm from "../../NumberForm/NumberForm.component";

const CanvasOptionsPanel = ({
  selectedIndex,
  gridProps,
  setGridFeature,
  setGridsColor,
  setBackgroundColor,
}) => {
  // Handle Rotation slide
  const handleRotationChange = (val) => {
    setGridFeature("angle", val);
  };

  // Handle Zoom slider
  const handleZoomChange = (val) => {
    setGridFeature("zoom", val);
  };

  // Handle Horizontal slider
  const handleHorizontalChange = (val) => {
    setGridFeature("horizontal", val);
  };

  // Handle Vertical slider
  const handleVerticalChange = (val) => {
    setGridFeature("vertical", val);
  };

  // Handle Color Picker
  const handleColorChange = (color) => {
    setBackgroundColor(color);
  };

  const handleGridsColorChange = (color) => {
    setGridsColor(color);
  };

  return (
    <div className="CanvasOptionsPanel">
      <div className="canvas-options">
        <div>Rotate Image:</div>
        <Slider
          value={gridProps[selectedIndex]["angle"]}
          onChange={handleRotationChange}
          min={-360}
          max={360}
          step={1}
          className={"options-slider"}
        />
        <NumberForm
          value={gridProps[selectedIndex]["angle"]}
          onChange={handleRotationChange}
          min={-360}
          max={360}
          step={1}
        />
      </div>
      <div className="canvas-options">
        <div>Zoom Image:</div>
        <Slider
          value={gridProps[selectedIndex]["zoom"]}
          onChange={handleZoomChange}
          min={0.1}
          max={10}
          step={0.1}
          className={"options-slider"}
        ></Slider>
        <NumberForm
          value={gridProps[selectedIndex]["zoom"]}
          onChange={handleZoomChange}
          min={0.1}
          max={10}
          step={0.1}
        />
      </div>
      <div className="canvas-options">
        <div>Horizontal Position:</div>
        <Slider
          value={gridProps[selectedIndex]["horizontal"]}
          onChange={handleHorizontalChange}
          min={-500}
          max={500}
          step={1}
          className={"options-slider"}
        ></Slider>
        <NumberForm
          value={gridProps[selectedIndex]["horizontal"]}
          onChange={handleHorizontalChange}
          min={-500}
          max={500}
          step={1}
        ></NumberForm>
      </div>
      <div className="canvas-options">
        <div>Vertical Position:</div>
        <Slider
          value={gridProps[selectedIndex]["vertical"]}
          onChange={handleVerticalChange}
          min={-500}
          max={500}
          step={1}
          className={"options-slider"}
        ></Slider>
        <NumberForm
          value={gridProps[selectedIndex]["vertical"]}
          onChange={handleVerticalChange}
          min={-500}
          max={500}
          step={1}
        ></NumberForm>
      </div>
      <ColorPicker
        label={"Background Color: "}
        onChange={handleColorChange}
        className={"canvas-options"}
      ></ColorPicker>
      <ColorPicker
        label={"Grid Color: "}
        onChange={handleGridsColorChange}
        className={"canvas-options"}
      ></ColorPicker>
    </div>
  );
};

export default CanvasOptionsPanel;
