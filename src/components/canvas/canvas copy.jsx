import "./styles.css";
import { useEffect, useState, useRef } from "react";
import { makeHandle } from "./canvas.helpers";

const Canvas = (props) => {
  const [currentStyle, setCurrentStyle] = useState({});
  const [selectedGrid, setSelectedGrid] = useState();

  useEffect(() => {
    setCurrentStyle({
      gridTemplateRows: "1fr 1fr",
      gridTemplateColumns: "1fr 1fr",
      backgroundColor: "pink",
    });
  }, []);

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

  const handleSetSelectedGrid = (ref) => {
    setSelectedGrid(ref);
  };

  const generateImages = (images) => {
    return images.map((image, index) => {
      let rightMost = "";
      let refVal = null;
      if (index === 1 || index === 3) rightMost = "grid-item--right-most";
      if (index === 0) refVal = grid1;
      if (index === 1) refVal = grid2;
      if (index === 2) refVal = grid3;
      if (index === 3) refVal = grid4;
      return (
        <div className={`image-container grid-item ${rightMost}`} key={String(image)} ref={refVal}>
          <img
            className="canvas-image"
            src={image}
            alt={String(image)}
            onClick={() => handleSetSelectedGrid(refVal.current)}
          />
        </div>
      );
    });
  };

  return (
    <div className="Canvas" style={currentStyle}>
      {generateImages(props.images)}
    </div>
  );
};

export default Canvas;
