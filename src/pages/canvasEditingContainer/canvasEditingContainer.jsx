import "./styles.css";
import Canvas from "../../components/canvas/canvas";
import Button from "../../components/button/button";

const CanvasEditingContainer = (props) => {
  const renderPreview = () => {
    return (
      <div className="selected-images-preview">
        {props.images.map((image) => {
          return (
            <img
              className="CEC-selected-images"
              src={image}
              alt={String(image)}
              key={String(image)}
              style={{ height: "4rem" }}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className="CanvasEditingContainer">
      <div className="grid-styles">
        <Button active={true}>4x4</Button>
        <Button allowed={false}>2x2</Button>
        <Button allowed={false}>5x5</Button>
      </div>
      <div className="selected-images-container">
        <div>Selected Images</div>
        {renderPreview()}
      </div>
      <Canvas images={props.images} />
    </div>
  );
};

export default CanvasEditingContainer;
