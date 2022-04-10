import "./CanvasGrid.styles.css";
import { useEffect, useState, useRef, useCallback } from "react";
import { makeLinkedProperty, generateImagesOptionsV2 } from "./helpers/canvas.helpers";
import CanvasOptionsPanel from "../CanvasOptionsPanelGrid/CanvasOptionsPanelGrid.component";

const Canvas = (props) => {
  // Setup references to each image in the grid
  const grid0 = useRef();
  const grid1 = useRef();
  const grid2 = useRef();
  const grid3 = useRef();

  // This solves the problem of having to use conditional setVals for each grid selected for handleClick
  // Instead of useing ifs, the hashtable gridPropsMap is used.
  grid0.id = "grid0";
  grid1.id = "grid1";
  grid2.id = "grid2";
  grid3.id = "grid3";

  // Handle resizing of grids
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMouseDown = (index, ref) => {
    setActiveIndex(index);
    setSelectedGrid(ref);
  };

  // Handle grid resizing
  const handleMouseMove = useCallback(
    (e) => {
      if (activeIndex === 0) {
        makeLinkedProperty(e, grid2, "width");
        makeLinkedProperty(e, grid1, "height");
      }
      if (activeIndex === 1 && grid3.current) {
        makeLinkedProperty(e, grid3, "width");
        makeLinkedProperty(e, grid0, "height");
      }
      if (activeIndex === 2 && grid3.current) {
        makeLinkedProperty(e, grid0, "width");
        makeLinkedProperty(e, grid3, "height");
      }
      if (activeIndex === 3) {
        makeLinkedProperty(e, grid1, "width");
        makeLinkedProperty(e, grid2, "height");
      }
    },
    [activeIndex]
  );

  const handleMouseUp = useCallback(() => {
    setActiveIndex(null);
    window.removeEventListener("mousemove", handleMouseMove);
  }, [setActiveIndex, handleMouseMove]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [activeIndex, handleMouseMove, handleMouseUp]);

  // Handle when the user clicks on a grid elemeent
  const [selectedGrid, setSelectedGrid] = useState();

  const handleClick = (index, ref) => {
    // setSelectedGrid(ref);
    // Allow for re-setting the sliders to correct (current grid item prop values) when clicking on a different image
    setRotationVal(gridPropsMap[ref.id].angle);
    setZoomVal(gridPropsMap[ref.id].zoom);
    setHorizontalVal(gridPropsMap[ref.id].horizontal);
    setVerticalVal(gridPropsMap[ref.id].vertical);
  };

  const generateImages = (images) => {
    return images.map((image, index) => {
      const { currentRef, angle, zoom, horizontal, vertical } = generateImagesOptionsV2(
        index,
        grids,
        gridProps,
        gridPropsMap
      );
      let selected = false;
      if (selectedGrid === currentRef) selected = true;
      return (
        <div
          className={`image-container ${selected ? "selected-grid" : ""} `}
          key={String(image)}
          ref={currentRef}
          onMouseDown={() => handleMouseDown(index, currentRef)}
          onClick={() => handleClick(index, currentRef)}
        >
          <img
            className="grid-image"
            src={image}
            alt={String(image)}
            style={{
              transform: `rotate(${angle}deg) scale(${zoom}) translateX(${horizontal}px) translateY(${vertical}px)`,
            }}
          />
        </div>
      );
    });
  };

  // Figure out a way to create these iteratively.
  // Setup grid item state

  const initialPropState = { angle: 0, zoom: 1, horizontal: 0, vertical: 0 };
  const [grid0Props, setgrid0Props] = useState(initialPropState);
  const [grid1Props, setgrid1Props] = useState(initialPropState);
  const [grid2Props, setgrid2Props] = useState(initialPropState);
  const [grid3Props, setgrid3Props] = useState(initialPropState);

  const grids = { grid0, grid1, grid2, grid3 };
  const gridProps = { grid0Props, grid1Props, grid2Props, grid3Props };
  const gridPropsMap = {
    grid0: grid0Props,
    grid1: grid1Props,
    grid2: grid2Props,
    grid3: grid3Props,
  };
  const setGridProps = { setgrid0Props, setgrid1Props, setgrid2Props, setgrid3Props };

  const canvasRef = useRef();

  // Setup slider state
  const [rotationVal, setRotationVal] = useState(0);
  const [zoomVal, setZoomVal] = useState(1);
  const [horizontalVal, setHorizontalVal] = useState(0);
  const [verticalVal, setVerticalVal] = useState(0);

  const sliderVals = { rotationVal, zoomVal, horizontalVal, verticalVal };
  const sliderSetVals = { setRotationVal, setZoomVal, setHorizontalVal, setVerticalVal };

  return (
    <div className="Canvas-container">
      <div className="Canvas" style={props.collageStyle} ref={canvasRef}>
        {generateImages(props.images)}
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

export default Canvas;
