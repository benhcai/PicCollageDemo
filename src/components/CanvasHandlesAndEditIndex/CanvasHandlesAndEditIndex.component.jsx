import "./CanvasHandlesAndEditIndex.styles.css";
import { useEffect, useRef, useState, Fragment } from "react";
import { handleMouseDownLeft } from "./helpers/handleMouseDownLeft";
import { handleMouseDownLeftRight } from "./helpers/handleMouseDownLeftRight";
import { handleMouseDownRight } from "./helpers/handleMouseDownRight";
import { handleMouseDownBottom } from "./helpers/handleMouseDownBottom";
import CanvasOptionsPanelIndex from "../CanvasOptionsPanelIndex/CanvasOptionsPanelIndex.component";

// This is the updated Canvas element. Instead of referencing properties based on ref name, we use index.
// This assumes the order in the image array is irrelevant and consistent.

const CanvasHandles = ({ collageStyle, images }) => {
  const grid0 = useRef();
  const grid1 = useRef();
  const grid2 = useRef();
  const grid3 = useRef();

  // use name as id or simply a number corresponding to index?
  // change to numbers, created with loop through grid object
  // make grid object an array
  // make dependends (angle selectors...) based on id instead of name id
  grid0.id = "grid0";
  grid1.id = "grid1";
  grid2.id = "grid2";
  grid3.id = "grid3";

  const [selectedIndex, setSelectedIndex] = useState();

  // Setup state for grid items
  const initialPropState = { angle: 0, zoom: 1, horizontal: 0, vertical: 0 };
  const [grid0Props, setgrid0Props] = useState(initialPropState);
  const [grid1Props, setgrid1Props] = useState(initialPropState);
  const [grid2Props, setgrid2Props] = useState(initialPropState);
  const [grid3Props, setgrid3Props] = useState(initialPropState);

  const grids = { grid0, grid1, grid2, grid3 };
  const gridsId = [grid0, grid1, grid2, grid3];
  const gridPropsId = [grid0Props, grid1Props, grid2Props, grid3Props];
  const setGridProps = { setgrid0Props, setgrid1Props, setgrid2Props, setgrid3Props };
  const setGridPropsId = [setgrid0Props, setgrid1Props, setgrid2Props, setgrid3Props];

  const handleGridClick = (index) => {
    setSelectedIndex(index);
    setRotationVal(Number(gridPropsId[index].angle));
    setZoomVal(Number(gridPropsId[index].zoom));
    setHorizontalVal(Number(gridPropsId[index].horizontal));
    setVerticalVal(Number(gridPropsId[index].vertical));

    //onclick of image, load its props into sliders.
    // do I need the mapping object?
    // can i do it with index?
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

  const makeGrids = (images) => {
    // conditional rendering of handles logic (index) => handles(position)
    // helper function (i) => div(ref, onclick)
    return gridsId.map((grid, index) => {
      let style = { backgroundColor: gridsColor };
      // if (selectedIndex === index) style = { ...style, border: "3px solid rgb(29, 204, 102)" };
      if (selectedIndex === index)
        style = { ...style, boxShadow: "0px 0px 0px 3px rgb(29, 204, 102)" };

      return (
        <div
          className={`CanvasHandles--item ${index}`}
          ref={gridsId[index]}
          key={String(images[index])}
        >
          <div className={`item-contained`} style={style} onClick={() => handleGridClick(index)}>
            <img
              className="contained-img"
              src={images[index] ? String(images[index]) : ""}
              alt={images[index] ? String(images[index]) : ""}
              style={{
                transform: `rotate(${gridPropsId[index].angle}deg) scale(${gridPropsId[index].zoom}) translateX(${gridPropsId[index].horizontal}px) translateY(${gridPropsId[index].vertical}px)`,
              }}
            />
          </div>
          {makeGridHandles(index)}
        </div>
      );
    });
  };

  // Setup state for sliders
  const [rotationVal, setRotationVal] = useState(0);
  const [zoomVal, setZoomVal] = useState(1);
  const [horizontalVal, setHorizontalVal] = useState(0);
  const [verticalVal, setVerticalVal] = useState(0);

  const sliderVals = { rotationVal, zoomVal, horizontalVal, verticalVal };
  const sliderSetVals = { setRotationVal, setZoomVal, setHorizontalVal, setVerticalVal };

  const canvasRef = useRef();

  const [gridsColor, setGridsColor] = useState("#000000");

  return (
    <div className="CanvasHandles">
      <div className="CanvasHandles--container" ref={canvasRef} style={collageStyle}>
        {makeGrids(images)}
      </div>
      <CanvasOptionsPanelIndex
        canvasRef={canvasRef}
        sliderVals={sliderVals}
        sliderSetVals={sliderSetVals}
        selectedIndex={selectedIndex}
        setGridPropsId={setGridPropsId}
        setGridsColor={setGridsColor}
      ></CanvasOptionsPanelIndex>
    </div>
  );
};

export default CanvasHandles;
