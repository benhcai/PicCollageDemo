import "./CanvasIndex.styles.css";
import { useEffect, useRef, useState, Fragment } from "react";
import { handleMouseDownLeft } from "./helpers/handleMouseDownLeft";
import { handleMouseDownLeftRight } from "./helpers/handleMouseDownLeftRight";
import { handleMouseDownRight } from "./helpers/handleMouseDownRight";
import { handleMouseDownBottom } from "./helpers/handleMouseDownBottom";
import CanvasOptionsPanelIndex from "../CanvasOptionsPanelIndex/CanvasOptionsPanelIndex.component";

// This is the updated Canvas element. Instead of referencing properties based on ref name, we use index.
// This assumes the order in the image array is irrelevant and consistent.

// Refactor gridXProps into single state object

const CanvasHandles = ({ collageStyle, images }) => {
  const grid0 = useRef();
  const grid1 = useRef();
  const grid2 = useRef();
  const grid3 = useRef();

  const [selectedIndex, setSelectedIndex] = useState(0);

  // Setup slider state store
  const createInitialState = (initialState) => ({ ...initialState });
  const createGridState = (amount, initialGridProperties) => {
    const store = [];
    for (let i = 0; i < amount; i++) {
      store.push(createInitialState(initialGridProperties));
    }
    return store;
  };
  const gridElements = 4;
  const initialGridProperties = { angle: 0, zoom: 1, horizontal: 0, vertical: 0 };
  const [gridProps, setGridProps] = useState(createGridState(gridElements, initialGridProperties));
  console.log(gridProps);

  // Pass this to the slider
  // Slider sets its value based on selectedIndex and gridProps
  // Changing the slider changes the gridProps state in Canvas
  // Div's style attribute reads the state and updates.
  const setGridFeature = (property, val) => {
    const setStore = setGridProps;
    const index = selectedIndex;
    setStore((prevStore) => {
      const newStore = [...prevStore];
      newStore[index][property] = val;
      return newStore;
    });
  };

  // Setup state for grid items
  const grids = { grid0, grid1, grid2, grid3 };
  const gridRefs = [grid0, grid1, grid2, grid3];

  const handleGridClick = (index) => {
    setSelectedIndex(index);
  };

  const makeGridHandles = (index) => {
    if (index === 0) {
      return (
        <Fragment>
          <div
            className="handle handle-left"
            onMouseDown={(e) => {
              handleMouseDownLeft(e, grids);
            }}
          ></div>
          <div
            className="handle  handle-leftright"
            onMouseDown={(e) => handleMouseDownLeftRight(e, grids)}
          ></div>
          <div
            className="handle  handle-bottom"
            onMouseDown={(e) => handleMouseDownBottom(e, grids)}
          ></div>
        </Fragment>
      );
    }
    if (index === 1) {
      return (
        <Fragment>
          <div
            className="handle handle-right"
            onMouseDown={(e) => handleMouseDownRight(e, grids)}
          ></div>
        </Fragment>
      );
    }
  };

  const handleStyle = (style, index) => {
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

  const makeGrids = (images) => {
    return gridProps.map((_grid, index) => {
      let style = { backgroundColor: gridsColor };
      if (selectedIndex === index)
        style = { ...style, boxShadow: "0px 0px 0px 3px rgb(29, 204, 102)" };
      return (
        <div
          className={`CanvasHandles--item ${index}`}
          ref={gridRefs[index]}
          key={String(images[index])}
        >
          <div className={`item-contained`} style={style} onClick={() => handleGridClick(index)}>
            <img
              className="contained-img"
              src={images[index] ? String(images[index]) : ""}
              alt={images[index] ? String(images[index]) : ""}
              style={handleStyle({}, index)}
            />
          </div>
          {makeGridHandles(index)}
        </div>
      );
    });
  };

  // Setup state for sliders
  const [backgroundColor, setBackgroundColor] = useState("#000000");
  const [gridsColor, setGridsColor] = useState("#000000");

  return (
    <div className="CanvasHandles">
      <div
        className="CanvasHandles--container"
        style={{ ...collageStyle, backgroundColor: backgroundColor }}
      >
        {makeGrids(images)}
      </div>
      {JSON.stringify(gridProps)}
      <CanvasOptionsPanelIndex
        selectedIndex={selectedIndex}
        gridProps={gridProps}
        setGridFeature={setGridFeature}
        setBackgroundColor={setBackgroundColor}
        setGridsColor={setGridsColor}
      ></CanvasOptionsPanelIndex>
    </div>
  );
};

export default CanvasHandles;
