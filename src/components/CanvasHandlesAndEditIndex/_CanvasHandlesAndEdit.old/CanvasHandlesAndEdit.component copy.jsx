import "./CanvasHandlesAndEdit.styles.css";
import { useEffect, useRef, useState } from "react";
import { handleMouseDownLeft, handleMouseMove } from "../helpers/handleMouseDownLeft";
import { handleMouseDownLeftRight } from "../helpers/handleMouseDownLeftRight";
import { handleMouseDownRight } from "../helpers/handleMouseDownRight";
import { handleMouseDownBottom } from "../helpers/handleMouseDownBottom";
import CanvasOptionsPanel from "../../CanvasOptionsPanelGrid/CanvasOptionsPanelGrid.component";
import { generateImagesOptions } from "../../CanvasGrid/helpers/canvas.helpers";
import { handleMouseUp } from "../helpers/handleMouseDownLeft";

// Refactor copy and pasted code
// Handle canvas sizes.
// Save images
// Grid backgrounds
// Adding text
// Adding frames
// Filters, coloring, bw
// D&D reordering
// Choose image on click of grid

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

  const [selectedGrid, setSelectedGrid] = useState();
  const [selectedGridProps, setSelectedGridProps] = useState();

  // Setup state for grid items
  const initialPropState = { angle: 0, zoom: 1, horizontal: 0, vertical: 0 };
  const [grid0Props, setgrid0Props] = useState(initialPropState);
  const [grid1Props, setgrid1Props] = useState(initialPropState);
  const [grid2Props, setgrid2Props] = useState(initialPropState);
  const [grid3Props, setgrid3Props] = useState(initialPropState);

  const grids = { grid0, grid1, grid2, grid3 };
  const gridsId = [grid0, grid1, grid2, grid3];
  const gridProps = { grid0: grid0Props, grid1: grid1Props, grid2: grid2Props, grid3: grid3Props };
  const gridPropsId = [grid0Props, grid1Props, grid2Props, grid3Props];
  const setGridProps = { setgrid0Props, setgrid1Props, setgrid2Props, setgrid3Props };

  const handleGridClick = (ref) => {
    setSelectedGrid(ref);
    //onclick of image, load its props into sliders.
    // do I need the mapping object?
    // can i do it with index?
  };

  const makeGrids = () => {
    // conditional rendering of handles logic (index) => handles(position)
    // helper function (i) => div(ref, onclick)
    images.map((image) => {
      return (
        <div className="CanvasHandles--item">
          <div className="item-contained">
            <img className="contained-img" />
          </div>
        </div>
      );
    });
  };

  // Setup state for sliders
  const canvasRef = useRef();
  const [rotationVal, setRotationVal] = useState(0);
  const [zoomVal, setZoomVal] = useState(1);
  const [horizontalVal, setHorizontalVal] = useState(0);
  const [verticalVal, setVerticalVal] = useState(0);

  const sliderVals = { rotationVal, zoomVal, horizontalVal, verticalVal };
  const sliderSetVals = { setRotationVal, setZoomVal, setHorizontalVal, setVerticalVal };

  return (
    <div className="CanvasHandles">
      <div className="CanvasHandles--container" ref={canvasRef} style={collageStyle}>
        <div className="CanvasHandles--item 0" ref={grid0}>
          <div
            className="item-contained"
            onClick={() => {
              setSelectedGrid(grid0);
              setSelectedGridProps(gridProps.grid0);
              setRotationVal(Number(gridProps.grid0.angle));
              setZoomVal(Number(gridProps.grid0.zoom));
              setHorizontalVal(Number(gridProps.grid0.horizontal));
              setVerticalVal(Number(gridProps.grid0.vertical));
            }}
          >
            <img
              className="contained-img"
              src={images[0]}
              alt=""
              style={{
                transform: `rotate(${grid0Props.angle}deg) scale(${grid0Props.zoom}) translateX(${grid0Props.horizontal}px) translateY(${grid0Props.vertical}px)`,
              }}
            />
          </div>
          <div
            className="handle handle-left"
            onMouseDown={(e) => {
              handleMouseDownLeft(e, grids);
              // window.removeEventListener("mouseup", handleMouseUp);
              // console.log("removging", handleMouseUp);
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
        </div>
        <div className="CanvasHandles--item 1" ref={grid1}>
          <div
            className="item-contained"
            onClick={() => {
              setSelectedGrid(grid1);
              setSelectedGridProps(gridProps.grid1);
              setRotationVal(Number(gridProps.grid1.angle));
              setZoomVal(Number(gridProps.grid1.zoom));
              setHorizontalVal(Number(gridProps.grid1.horizontal));
              setVerticalVal(Number(gridProps.grid1.vertical));
            }}
          >
            <img
              className="contained-img"
              src={images[1]}
              alt=""
              style={{
                transform: `rotate(${grid1Props.angle}deg) scale(${grid1Props.zoom}) translateX(${grid1Props.horizontal}px) translateY(${grid1Props.vertical}px)`,
              }}
            />
          </div>
          <div
            className="handle handle-right"
            onMouseDown={(e) => handleMouseDownRight(e, grids)}
          ></div>
        </div>
        <div className="CanvasHandles--item 2" ref={grid2}>
          <div
            className="item-contained"
            onClick={() => {
              setSelectedGrid(grid2);
              setSelectedGridProps(gridProps.grid2);
              setRotationVal(Number(gridProps.grid2.angle));
              setZoomVal(Number(gridProps.grid2.zoom));
              setHorizontalVal(Number(gridProps.grid2.horizontal));
              setVerticalVal(Number(gridProps.grid2.vertical));
            }}
          >
            <img
              className="contained-img"
              src={images[2]}
              alt=""
              style={{
                transform: `rotate(${grid2Props.angle}deg) scale(${grid2Props.zoom}) translateX(${grid2Props.horizontal}px) translateY(${grid2Props.vertical}px)`,
              }}
            />
          </div>
        </div>
        <div className="CanvasHandles--item 3" ref={grid3}>
          <div
            className="item-contained"
            onClick={() => {
              setSelectedGrid(grid3);
              setSelectedGridProps(gridProps.grid3);
              setRotationVal(Number(gridProps.grid3.angle));
              setZoomVal(Number(gridProps.grid3.zoom));
              setHorizontalVal(Number(gridProps.grid3.horizontal));
              setVerticalVal(Number(gridProps.grid3.vertical));
            }}
          >
            <img
              className="contained-img"
              src={images[3]}
              alt=""
              style={{
                transform: `rotate(${grid3Props.angle}deg) scale(${grid3Props.zoom}) translateX(${grid3Props.horizontal}px) translateY(${grid3Props.vertical}px)`,
              }}
            />
          </div>
        </div>
      </div>
      <CanvasOptionsPanel
        selectedGrid={selectedGrid}
        grids={grids}
        setGridProps={setGridProps}
        canvasRef={canvasRef}
        sliderVals={sliderVals}
        sliderSetVals={sliderSetVals}
      ></CanvasOptionsPanel>
    </div>
  );
};

export default CanvasHandles;
