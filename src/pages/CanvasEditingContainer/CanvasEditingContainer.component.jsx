import "./CanvasEditingContainer.styles.css";
import CanvasGrid from "../../components/CanvasGrid/CanvasGrid.component";
import CanvasHandlesEdit from "../../components/CanvasHandlesAndEditIndex/CanvasHandlesAndEditIndex.component";
import Button from "../../components/Button/Button.component";
import ButtonGroup from "../../components/Button/ButtonGroup/ButtonGroup.component";
import { useState, useEffect } from "react";
import { chooseCollageStyling } from "./collageStyles";

const CanvasEditingContainer = ({ chosenImages }) => {
  // Hypothetical case: 2x2 grid
  const [chosenLayout, setChosenLayout] = useState("2x2");
  const [collageStyle, setCollageStyle] = useState({});
  const [canvasEditor, setCanvasEditor] = useState("old");
  const [imagesLimited, setImagesLimited] = useState([]);

  useEffect(() => {
    const collageStyle = chooseCollageStyling(chosenLayout);
    setCollageStyle(collageStyle);
    // Limit images to 4 based on 2x2 grid.
    if (chosenLayout === "2x2") setImagesLimited(chosenImages.slice(0, 4));
  }, [chosenLayout, chosenImages]);

  const renderPreview = () => {
    return (
      <div className="selected-images-preview">
        {imagesLimited.map((image) => {
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

  const generateCanvas = () => {
    if (canvasEditor === "old")
      return <CanvasGrid images={imagesLimited} collageStyle={collageStyle} />;
    if (canvasEditor === "new")
      return <CanvasHandlesEdit images={imagesLimited} collageStyle={collageStyle} />;
  };

  return (
    <div className="CanvasEditingContainer">
      <ButtonGroup className="grid-styles" initialActive={0}>
        <Button id="0" onClick={() => setChosenLayout("2x2")}>
          2x2
        </Button>
        <Button id="1" onClick={() => setChosenLayout("3x3")} allowed={false}>
          3x3
        </Button>
        <Button id="2" onClick={() => setChosenLayout("4x4")} allowed={false}>
          4x4
        </Button>
      </ButtonGroup>
      <ButtonGroup className="grid-styles" initialActive={0}>
        <Button id="1" onClick={() => setCanvasEditor("old")}>
          Old Canvas Editor
        </Button>
        <Button id="2" onClick={() => setCanvasEditor("new")}>
          New Canvas Editor
        </Button>
      </ButtonGroup>
      <div className="selected-images-container">
        <div>Selected Images</div>
        {renderPreview()}
      </div>
      {generateCanvas()}
    </div>
  );
};

export default CanvasEditingContainer;
