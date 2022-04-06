import "./styles.css";
import { useEffect, useState, useRef, useCallback } from "react";
import { makeLinkedProperty, generateImagesOptions } from "./canvas.helpers";
import CanvasOptionsPanel from "../canvasOptionsPanel/canvasOptionsPanel";

const Canvas = (props) => {
  // Set current style state as 4x4 grid
  const [currentStyle, setCurrentStyle] = useState({});
  const [images, setImages] = useState([]);

  useEffect(() => {
    setCurrentStyle({
      gridTemplateRows: "auto auto",
      gridTemplateColumns: "auto auto",
    });
    const imagesReduced = images.slice(0, 4);
    setImages(imagesReduced);
  }, [images]);

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
      const { refVal, angle, zoom, horizontal, vertical } = generateImagesOptions(
        index,
        grids,
        gridProps
      );
      let selected = false;
      if (selectedGrid === refVal.current) selected = true;
      return (
        <div
          className={`image-container ${selected ? "selected-grid" : ""} `}
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

  const grids = { grid0, grid1, grid2, grid3 };
  const gridProps = { grid0Props, grid1Props, grid2Props, grid3Props };
  const setGridProps = { setgrid0Props, setgrid1Props, setgrid2Props, setgrid3Props };

  const canvasRef = useRef();

  return (
    <div className="Canvas-container">
      <div className="Canvas" style={currentStyle} ref={canvasRef}>
        {generateImages(props.images)}
      </div>

      <CanvasOptionsPanel
        selectedGrid={selectedGrid}
        grids={grids}
        setGridProps={setGridProps}
        canvasRef={canvasRef}
      ></CanvasOptionsPanel>
    </div>
  );
};

export default Canvas;
