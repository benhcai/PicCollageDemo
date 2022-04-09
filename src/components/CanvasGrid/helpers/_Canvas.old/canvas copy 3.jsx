import "./styles.css";
import { useEffect, useState, useRef, useCallback } from "react";
import { makeLinkedProperty } from "./canvas.helpers";
import Slider from "../slider/slider";

const Canvas = (props) => {
  // Set current style state as 4x4 grid
  const [currentStyle, setCurrentStyle] = useState({});

  useEffect(() => {
    setCurrentStyle({
      gridTemplateRows: "auto auto",
      gridTemplateColumns: "auto auto",
    });
  }, []);

  // Setup references to each image in the grid
  const grid0 = useRef();
  const grid1 = useRef();
  const grid2 = useRef();
  const grid3 = useRef();

  // Handle resizing of grids
  const [activeIndex, setActiveIndex] = useState(null);
  const handleMouseDown = (index, ref) => {
    setActiveIndex(index);
    setSelectedGrid(ref);
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (activeIndex === 0) {
        makeLinkedProperty(e, grid2, "width");
        makeLinkedProperty(e, grid1, "height");
      }
      // if (activeIndex === 1) {
      //   makeLinkedProperty(e, grid3, "width");
      //   makeLinkedProperty(e, grid0, "height");
      // }
      // if (activeIndex === 2) {
      //   makeLinkedProperty(e, grid0, "width");
      //   makeLinkedProperty(e, grid3, "height");
      // }
      // if (activeIndex === 3) {
      //   makeLinkedProperty(e, grid1, "width");
      //   makeLinkedProperty(e, grid2, "height");
      // }
    },
    [activeIndex]
  );

  const removeListeners = useCallback(() => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", removeListeners);
  }, [handleMouseMove]);

  const handleMouseUp = useCallback(() => {
    setActiveIndex(null);
    removeListeners();
  }, [setActiveIndex, removeListeners]);

  useEffect(() => {
    if (activeIndex !== null) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      removeListeners();
    };
  }, [activeIndex, handleMouseMove, handleMouseUp, removeListeners]);

  // Handle when the user clicks on a grid elemeent
  const [selectedGrid, setSelectedGrid] = useState();

  const generateImages = (images) => {
    return images.map((image, index) => {
      let rightMost = "";
      if (index === 1 || index === 3) rightMost = "grid-item--right-most";
      let refVal = null;
      let angle = 0;
      let zoom = 1;
      let horizontal = 0;
      let vertical = 0;
      if (index === 0) {
        refVal = grid0;
        angle = grid0Props.angle;
        zoom = grid0Props.zoom;
        horizontal = grid0Props.horizontal;
        vertical = grid0Props.vertical;
      }
      if (index === 1) {
        refVal = grid1;
        angle = grid1Props.angle;
        zoom = grid1Props.zoom;
        horizontal = grid1Props.horizontal;
        vertical = grid1Props.vertical;
      }
      if (index === 2) {
        refVal = grid2;
        angle = grid2Props.angle;
        zoom = grid2Props.zoom;
        horizontal = grid2Props.horizontal;
        vertical = grid2Props.vertical;
      }
      if (index === 3) {
        refVal = grid3;
        angle = grid3Props.angle;
        zoom = grid3Props.zoom;
        horizontal = grid3Props.horizontal;
        vertical = grid3Props.vertical;
      }
      let selected = false;
      if (selectedGrid === refVal.current) selected = true;
      return (
        <div
          className={`image-container ${rightMost} ${selected ? "selected-grid" : ""} `}
          key={String(image)}
          ref={refVal}
          onMouseDown={() => handleMouseDown(index, refVal.current)}
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

  // Setup grid item state
  const [grid0Props, setgrid0Props] = useState({ angle: 0, zoom: 1, horizontal: 0, vertical: 0 });
  const [grid1Props, setgrid1Props] = useState({ angle: 0, zoom: 1, horizontal: 0, vertical: 0 });
  const [grid2Props, setgrid2Props] = useState({ angle: 0, zoom: 1, horizontal: 0, vertical: 0 });
  const [grid3Props, setgrid3Props] = useState({ angle: 0, zoom: 1, horizontal: 0, vertical: 0 });

  // Handle Rotation
  const [rotationVal, setRotationVal] = useState(0);
  const handleRotationChange = (val) => {
    if (selectedGrid === grid0.current)
      setgrid0Props((prevProps) => ({ ...prevProps, angle: val }));
    if (selectedGrid === grid1.current)
      setgrid1Props((prevProps) => ({ ...prevProps, angle: val }));
    if (selectedGrid === grid2.current)
      setgrid2Props((prevProps) => ({ ...prevProps, angle: val }));
    if (selectedGrid === grid3.current)
      setgrid3Props((prevProps) => ({ ...prevProps, angle: val }));
    setRotationVal(val);
  };

  // Handle Zoom
  const [zoomVal, setZoomVal] = useState(1);
  const handleZoomChange = (val) => {
    if (selectedGrid === grid0.current) setgrid0Props((prevProps) => ({ ...prevProps, zoom: val }));
    if (selectedGrid === grid1.current) setgrid1Props((prevProps) => ({ ...prevProps, zoom: val }));
    if (selectedGrid === grid2.current) setgrid2Props((prevProps) => ({ ...prevProps, zoom: val }));
    if (selectedGrid === grid3.current) setgrid3Props((prevProps) => ({ ...prevProps, zoom: val }));
    setZoomVal(val);
  };

  // Handle Horizontal slide
  const [horizontalVal, setHorizontalVal] = useState(1);
  const handleHorizontalChange = (val) => {
    if (selectedGrid === grid0.current)
      setgrid0Props((prevProps) => ({ ...prevProps, horizontal: val }));
    if (selectedGrid === grid1.current)
      setgrid1Props((prevProps) => ({ ...prevProps, horizontal: val }));
    if (selectedGrid === grid2.current)
      setgrid2Props((prevProps) => ({ ...prevProps, horizontal: val }));
    if (selectedGrid === grid3.current)
      setgrid3Props((prevProps) => ({ ...prevProps, horizontal: val }));
    setHorizontalVal(val);
  };

  // Handle Horizontal slide
  const [verticalVal, setVerticalVal] = useState(1);
  const handleVerticalChange = (val) => {
    if (selectedGrid === grid0.current)
      setgrid0Props((prevProps) => ({ ...prevProps, vertical: val }));
    if (selectedGrid === grid1.current)
      setgrid1Props((prevProps) => ({ ...prevProps, vertical: val }));
    if (selectedGrid === grid2.current)
      setgrid2Props((prevProps) => ({ ...prevProps, vertical: val }));
    if (selectedGrid === grid3.current)
      setgrid3Props((prevProps) => ({ ...prevProps, vertical: val }));
    setVerticalVal(val);
  };

  return (
    <div className="Canvas-container">
      <div className="Canvas" style={currentStyle}>
        {generateImages(props.images)}
      </div>
      <div>
        <div>Rotate Image: {rotationVal}</div>
        <Slider
          value={rotationVal}
          onChange={handleRotationChange}
          min={-360}
          max={360}
          step={1}
        ></Slider>
      </div>
      <div>
        <div>Zoom Image: {zoomVal}</div>
        <Slider value={zoomVal} onChange={handleZoomChange} min={0.1} max={10} step={0.1}></Slider>
      </div>
      <div>
        <div>Horizontal Position: {horizontalVal}</div>
        <Slider
          value={horizontalVal}
          onChange={handleHorizontalChange}
          min={-200}
          max={200}
          step={1}
        ></Slider>
      </div>
      <div>
        <div>Vertical Position: {verticalVal}</div>
        <Slider
          value={verticalVal}
          onChange={handleVerticalChange}
          min={-200}
          max={200}
          step={1}
        ></Slider>
      </div>
    </div>
  );
};

export default Canvas;
