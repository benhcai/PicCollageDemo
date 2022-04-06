import "./styles.css";
import { useRef } from "react";

const Canvas = (props) => {
  const item0 = useRef();
  const item1 = useRef();
  const item2 = useRef();
  const item3 = useRef();

  const handleMouseDownLeft = (e) => {
    const prevX = e.clientX;
    const initialWidth0 = item0.current.offsetWidth;
    const initialWidth2 = item2.current.offsetWidth;

    const handleMouseMove = (e) => {
      item0.current.style.width = `${initialWidth0 - (e.clientX - prevX)}px`;
      item2.current.style.width = `${initialWidth2 - (e.clientX - prevX)}px`;
    };
    const handleMouseUp = (e) => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDownLeftRight = (e) => {
    const prevX = e.clientX;
    const initialWidth0 = item0.current.offsetWidth;
    const initialWidth1 = item1.current.offsetWidth;
    const initialWidth2 = item2.current.offsetWidth;
    const initialWidth3 = item3.current.offsetWidth;

    const handleMouseMove = (e) => {
      item0.current.style.width = `${initialWidth0 + (e.clientX - prevX)}px`;
      item2.current.style.width = `${initialWidth2 + (e.clientX - prevX)}px`;

      item1.current.style.width = `${initialWidth1 - (e.clientX - prevX)}px`;
      item3.current.style.width = `${initialWidth3 - (e.clientX - prevX)}px`;
    };
    const handleMouseUp = (e) => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDownRight = (e) => {
    const prevX = e.clientX;
    const initialWidth1 = item1.current.offsetWidth;
    const initialWidth3 = item3.current.offsetWidth;

    const handleMouseMove = (e) => {
      item1.current.style.width = `${initialWidth1 + (e.clientX - prevX)}px`;
      item3.current.style.width = `${initialWidth3 + (e.clientX - prevX)}px`;
    };
    const handleMouseUp = (e) => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleMouseDownBottom = (e) => {
    const prevY = e.clientY;
    const initialHeight0 = item0.current.offsetHeight;
    const initialHeight1 = item1.current.offsetHeight;
    const initialHeight2 = item2.current.offsetHeight;
    const initialHeight3 = item3.current.offsetHeight;

    const handleMouseMove = (e) => {
      item0.current.style.height = `${initialHeight0 + (e.clientY - prevY)}px`;
      item1.current.style.height = `${initialHeight1 + (e.clientY - prevY)}px`;

      item2.current.style.height = `${initialHeight2 - (e.clientY - prevY)}px`;
      item3.current.style.height = `${initialHeight3 - (e.clientY - prevY)}px`;
    };
    const handleMouseUp = (e) => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  console.log("hadl");

  return (
    <div className="Canvas-container">
      <div className="line"></div>
      <div className="container">
        <div className="item 0" ref={item0}>
          <div className="item-contained">
            <img className="contained-img" src={props.images[0]} alt="" />
          </div>
          <div className="handle handle-left" onMouseDown={handleMouseDownLeft}></div>
          <div className="handle  handle-leftright" onMouseDown={handleMouseDownLeftRight}></div>
          <div className="handle  handle-bottom" onMouseDown={handleMouseDownBottom}></div>
        </div>
        <div className="item 1" ref={item1}>
          <div className="item-contained">
            <img className="contained-img" src={props.images[1]} alt="" />
          </div>
          <div className="handle handle-right" onMouseDown={handleMouseDownRight}></div>
        </div>
        <div className="item 2" ref={item2}>
          <div className="item-contained">
            <img className="contained-img" src={props.images[2]} alt="" />
          </div>
        </div>
        <div className="item 3" ref={item3}>
          <div className="item-contained">
            <img className="contained-img" src={props.images[3]} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canvas;
