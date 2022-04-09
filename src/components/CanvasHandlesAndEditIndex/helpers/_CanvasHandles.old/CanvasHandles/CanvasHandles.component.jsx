// import "./CanvasHandles.styles.css";
import { useRef } from "react";

const Canvas = (props) => {
  const grid0 = useRef();
  const grid1 = useRef();
  const grid2 = useRef();
  const grid3 = useRef();

  const handleMouseDownLeft = (e) => {
    const prevX = e.clientX;
    const initialWidth0 = grid0.current.offsetWidth;
    const initialWidth2 = grid2.current.offsetWidth;

    const handleMouseMove = (e) => {
      grid0.current.style.width = `${initialWidth0 - (e.clientX - prevX)}px`;
      grid2.current.style.width = `${initialWidth2 - (e.clientX - prevX)}px`;
    };
    const handleMouseUp = (e) => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDownLeftRight = (e) => {
    const prevX = e.clientX;
    const initialWidth0 = grid0.current.offsetWidth;
    const initialWidth1 = grid1.current.offsetWidth;
    const initialWidth2 = grid2.current.offsetWidth;
    const initialWidth3 = grid3.current.offsetWidth;

    const handleMouseMove = (e) => {
      grid0.current.style.width = `${initialWidth0 + (e.clientX - prevX)}px`;
      grid2.current.style.width = `${initialWidth2 + (e.clientX - prevX)}px`;

      grid1.current.style.width = `${initialWidth1 - (e.clientX - prevX)}px`;
      grid3.current.style.width = `${initialWidth3 - (e.clientX - prevX)}px`;
    };
    const handleMouseUp = (e) => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDownRight = (e) => {
    const prevX = e.clientX;
    const initialWidth1 = grid1.current.offsetWidth;
    const initialWidth3 = grid3.current.offsetWidth;

    const handleMouseMove = (e) => {
      grid1.current.style.width = `${initialWidth1 + (e.clientX - prevX)}px`;
      grid3.current.style.width = `${initialWidth3 + (e.clientX - prevX)}px`;
    };
    const handleMouseUp = (e) => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDownBottom = (e) => {
    const prevY = e.clientY;
    const initialHeight0 = grid0.current.offsetHeight;
    const initialHeight1 = grid1.current.offsetHeight;
    const initialHeight2 = grid2.current.offsetHeight;
    const initialHeight3 = grid3.current.offsetHeight;

    const handleMouseMove = (e) => {
      grid0.current.style.height = `${initialHeight0 + (e.clientY - prevY)}px`;
      grid1.current.style.height = `${initialHeight1 + (e.clientY - prevY)}px`;

      grid2.current.style.height = `${initialHeight2 - (e.clientY - prevY)}px`;
      grid3.current.style.height = `${initialHeight3 - (e.clientY - prevY)}px`;
    };
    const handleMouseUp = (e) => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="Canvas-container">
      <div className="line"></div>
      <div className="container">
        <div className="item 0" ref={grid0}>
          <div className="item-contained">
            <img className="contained-img" src={props.images[0]} alt="" />
          </div>
          <div className="handle handle-left" onMouseDown={handleMouseDownLeft}></div>
          <div className="handle  handle-leftright" onMouseDown={handleMouseDownLeftRight}></div>
          <div className="handle  handle-bottom" onMouseDown={handleMouseDownBottom}></div>
        </div>
        <div className="item 1" ref={grid1}>
          <div className="item-contained">
            <img className="contained-img" src={props.images[1]} alt="" />
          </div>
          <div className="handle handle-right" onMouseDown={handleMouseDownRight}></div>
        </div>
        <div className="item 2" ref={grid2}>
          <div className="item-contained">
            <img className="contained-img" src={props.images[2]} alt="" />
          </div>
        </div>
        <div className="item 3" ref={grid3}>
          <div className="item-contained">
            <img className="contained-img" src={props.images[3]} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
