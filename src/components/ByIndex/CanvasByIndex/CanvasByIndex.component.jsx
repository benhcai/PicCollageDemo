import "./CanvasByIndex.styles.css";
import React, { useMemo, useState } from "react";
import Button from "../../Button/Button.component";
import CanvasOptionsPanelIndex from "../../ByIndex/CanvasOptionsPanelByIndex/CanvasOptionsPanelByIndex.component";
import { makeGridState, setGridFeatureFactory } from "./helpers/stateSetup";
import { makeGridHandles2x2 } from "./helpers/makeGridHandles2x2";

// This is the updated Canvas element. Instead of referencing properties based on ref name, we use index.
// This assumes the order in the image array is consistent or irrelevant (solvable).

const CanvasByIndex = ({ collageStyle, images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const gridElements = 4;
  const initialGridProperties = { angle: 0, zoom: 1, horizontal: 0, vertical: 0 };
  const [gridProps, setGridProps] = useState(makeGridState(gridElements, initialGridProperties));
  const setGridFeatureConfigured = setGridFeatureFactory(setGridProps, selectedIndex);

  const gridRefs = useMemo(() => {
    return gridProps.map(() => React.createRef());
  }, [gridProps]);

  const makeGridHandles = (index, gridRefs) => {
    const handleElements = makeGridHandles2x2(index, gridRefs);
    return handleElements;
  };

  const handleGridClick = (index) => {
    setSelectedIndex(index);
  };

  const handleContainerStyle = (style, index) => {
    let newStyle = { ...style, backgroundColor: gridsColor };
    if (selectedIndex === index && isEditingShown)
      newStyle = { ...newStyle, boxShadow: "0px 0px 0px 3px rgb(29, 204, 102)" };
    return newStyle;
  };

  const handleImageStyle = (style, index) => {
    const angle = gridProps[index]["angle"];
    const zoom = gridProps[index]["zoom"];
    const horizontal = gridProps[index]["horizontal"];
    const vertical = gridProps[index]["vertical"];
    const newStyle = {
      ...style,
      transform: `rotate(${angle}deg) scale(${zoom}) translateX(${horizontal}px) translateY(${vertical}px)`,
    };
    return newStyle;
  };

  const [isEditingShown, setIsEditingShown] = useState(true);

  const makeGrids = (images) => {
    return gridProps.map((_grid, index) => {
      return (
        <div className={`CanvasByIndex--item ${index}`} ref={gridRefs[index]} key={index}>
          <div
            className={`CanvasByIndex--image-container`}
            style={handleContainerStyle({}, index)}
            onClick={() => handleGridClick(index)}
          >
            <img
              className="CanvasByIndex--contained-image"
              src={images[index] ? String(images[index]) : ""}
              alt={images[index] ? String(images[index]) : ""}
              style={handleImageStyle({}, index)}
            />
          </div>
          <div
            className={`${isEditingShown ? "CanvasByIndex--handles" : "CanvasByIndex---hidden"}`}
          >
            {makeGridHandles(index, gridRefs)}
          </div>
        </div>
      );
    });
  };

  // Setup state for color pickers.
  const defaultColor = "$000000";
  const [backgroundColor, setBackgroundColor] = useState(defaultColor);
  const [gridsColor, setGridsColor] = useState(defaultColor);

  const canvasCombinedStyle = { ...collageStyle, backgroundColor: backgroundColor };

  return (
    <div className="CanvasByIndex">
      <Button onClick={() => setIsEditingShown((prev) => !prev)} className="button--toggle-editing">
        Toggle Editing Handles
      </Button>
      <div className="CanvasByIndex--container" style={canvasCombinedStyle}>
        {makeGrids(images)}
      </div>
      <CanvasOptionsPanelIndex
        selectedIndex={selectedIndex}
        gridProps={gridProps}
        setGridFeature={setGridFeatureConfigured}
        setBackgroundColor={setBackgroundColor}
        setGridsColor={setGridsColor}
      ></CanvasOptionsPanelIndex>
    </div>
  );
};

export default CanvasByIndex;
