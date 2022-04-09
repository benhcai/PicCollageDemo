import "./styles.css";
import { useEffect, useState, useRef } from "react";
import { makeHandle } from "./canvas.helpers";
import Slider from "../../../slider/slider";

const Canvas = (props) => {
  // Set current style state as 4x4 grid
  const [currentStyle, setCurrentStyle] = useState({});

  useEffect(() => {
    setCurrentStyle({
      gridTemplateRows: "1fr 1fr",
      gridTemplateColumns: "1fr 1fr",
    });
  }, []);

  // Setup references to each image in the grid
  const grid1 = useRef();
  const grid2 = useRef();
  const grid3 = useRef();
  const grid4 = useRef();

  useEffect(() => {
    const handleGrid1 = makeHandle(grid3.current, grid2.current);
    const handleGrid2 = makeHandle(grid4.current, grid1.current);
    const handleGrid3 = makeHandle(grid1.current, grid4.current);
    const handleGrid4 = makeHandle(grid2.current, grid3.current);

    grid1.current.addEventListener("mousedown", handleGrid1);
    grid2.current.addEventListener("mousedown", handleGrid2);
    grid3.current.addEventListener("mousedown", handleGrid3);
    grid4.current.addEventListener("mousedown", handleGrid4);
  });

  // Handle when the user clicks on a grid elemeent
  const [selectedGrid, setSelectedGrid] = useState();

  const handleSetSelectedGrid = (ref) => {
    setSelectedGrid(ref);
  };

  const generateImages = (images) => {
    return images.map((image, index) => {
      let rightMost = "";
      let angle = 0;
      let refVal = null;
      if (index === 1 || index === 3) rightMost = "grid-item--right-most";
      if (index === 0) {
        refVal = grid1;
        angle = grid1Angle.angle;
        console.log(angle);
      }
      if (index === 1) {
        refVal = grid2;
        angle = grid2Angle.angle;
      }
      if (index === 2) {
        refVal = grid3;
        angle = grid3Angle.angle;
      }
      if (index === 3) {
        refVal = grid4;
        angle = grid4Angle.angle;
      }
      let selected = false;
      if (selectedGrid === refVal.current) selected = true;
      return (
        <div
          className={`image-container grid-item ${rightMost} ${selected ? "selected-grid" : ""}`}
          key={String(image)}
          ref={refVal}
          onClick={() => handleSetSelectedGrid(refVal.current)}
          draggable="false"
        >
          <img
            className="grid-image"
            src={image}
            alt={String(image)}
            style={{ transform: `rotate(${angle}deg)` }}
            draggable="false"
          />
        </div>
      );
    });
  };

  // Handle Slider
  const [sliderVal, setSliderVal] = useState(0);
  const [grid1Angle, setGrid1Angle] = useState({ angle: 0 });
  const [grid2Angle, setGrid2Angle] = useState({ angle: 0 });
  const [grid3Angle, setGrid3Angle] = useState({ angle: 0 });
  const [grid4Angle, setGrid4Angle] = useState({ angle: 0 });

  const handleSliderChange = (val) => {
    if (selectedGrid === grid1.current) setGrid1Angle({ angle: val });
    if (selectedGrid === grid2.current) setGrid2Angle({ angle: val });
    if (selectedGrid === grid3.current) setGrid3Angle({ angle: val });
    if (selectedGrid === grid4.current) setGrid4Angle({ angle: val });
    setSliderVal(val);
  };

  return (
    <div className="Canvas" style={currentStyle}>
      {generateImages(props.images)}
      <div>Rotate Image: {sliderVal}</div>
      <Slider value={sliderVal} onChange={handleSliderChange}></Slider>
    </div>
  );
};

export default Canvas;
