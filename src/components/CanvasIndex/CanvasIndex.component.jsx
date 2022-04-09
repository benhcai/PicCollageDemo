import "./CanvasIndex.styles.css";
import React, { useMemo, useRef, useState, Fragment } from "react";
import { handleMouseDownLeft } from "./helpers/handleMouseDownLeft";
import { handleMouseDownLeftRight } from "./helpers/handleMouseDownLeftRight";
import { handleMouseDownRight } from "./helpers/handleMouseDownRight";
import { handleMouseDownBottom } from "./helpers/handleMouseDownBottom";
import CanvasOptionsPanelIndex from "../CanvasOptionsPanelIndex/CanvasOptionsPanelIndex.component";

// This is the updated Canvas element. Instead of referencing properties based on ref name, we use index.
// This assumes the order in the image array is consistent or irrelevant (solvable).

const CanvasHandles = ({ collageStyle, images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Setup grid State store for sliders. Store array in useState and reference items by index.
  const createStateObject = (initialState) => ({ ...initialState });
  const createGridState = (amount, initialGridProperties) => {
    const store = [];
    for (let i = 0; i < amount; i++) {
      store.push(createStateObject(initialGridProperties));
    }
    return store;
  };
  const gridElements = 4;
  const initialGridProperties = { angle: 0, zoom: 1, horizontal: 0, vertical: 0 };
  const [gridProps, setGridProps] = useState(createGridState(gridElements, initialGridProperties));

  const setGridFeature = (property, val) => {
    const setStore = setGridProps;
    const index = selectedIndex;
    setStore((prevStore) => {
      const newStore = [...prevStore];
      newStore[index][property] = val;
      return newStore;
    });
  };

  // Setup Refs for each grid. These will be used to do handle calculations for grid resizing.
  const gridRefsMemo = useMemo(() => {
    return gridProps.map(() => React.createRef());
  }, [gridProps]);

  const makeGridHandles2x2 = (index) => {
    if (index === 0) {
      return (
        <Fragment>
          <div
            className="handle handle-left"
            onMouseDown={(e) => {
              // handleMouseDownLeft(e, grids);
              handleMouseDownLeft(e, gridRefsMemo);
            }}
          ></div>
          <div
            className="handle handle-leftright"
            onMouseDown={(e) => handleMouseDownLeftRight(e, gridRefsMemo)}
          ></div>
          <div
            className="handle handle-bottom"
            onMouseDown={(e) => handleMouseDownBottom(e, gridRefsMemo)}
          ></div>
        </Fragment>
      );
    }
    if (index === 1) {
      return (
        <Fragment>
          <div
            className="handle handle-right"
            onMouseDown={(e) => handleMouseDownRight(e, gridRefsMemo)}
          ></div>
        </Fragment>
      );
    }
  };

  const handleGridClick = (index) => {
    setSelectedIndex(index);
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
          ref={gridRefsMemo[index]}
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
          {makeGridHandles2x2(index)}
        </div>
      );
    });
  };

  // Setup state for color pickers
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
