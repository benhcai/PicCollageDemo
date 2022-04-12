import "./CanvasEditingContainer.styles.css";
import { useState, useEffect } from "react";
import CanvasByName from "../../components/ByName/CanvasByName/CanvasByName.component";
import CanvasByIndex from "../../components/ByIndex/CanvasByIndex/CanvasByIndex.component";
import Button from "../../components/Button/Button.component";
import ButtonGroup from "../../components/Button/ButtonGroup/ButtonGroup.component";
import { chooseCollageStyling, chooseMaxImages } from "./collageStyles";

const CanvasEditingContainer = ({ chosenImages }) => {
  // Hypothetical case: 2x2 grid
  const [imagesLimited, setImagesLimited] = useState([]);
  const [currentLayout, setCurrentLayout] = useState("2x2");
  const [collageStyle, setCollageStyle] = useState({});
  const [canvasEditor, setCanvasEditor] = useState("new");

  useEffect(() => {
    const collageStyle = chooseCollageStyling(currentLayout);
    setCollageStyle(collageStyle);
    // Limit images to 4 based on 2x2 grid.
    const maxImages = chooseMaxImages(currentLayout);
    setImagesLimited(chosenImages.slice(0, maxImages));
  }, [currentLayout, chosenImages]);

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
    if (canvasEditor === "new")
      return <CanvasByIndex images={imagesLimited} collageStyle={collageStyle} />;
    if (canvasEditor === "old")
      return <CanvasByName images={imagesLimited} collageStyle={collageStyle} />;
  };

  return (
    <div className="CanvasEditingContainer">
      <ButtonGroup className="grid-styles" initialActive={0}>
        {["2x2", "3x3", "4x4"].map((element, index) => {
          let allowed = false;
          if (index === 0) allowed = true;
          return (
            <Button
              id={index}
              key={index}
              onClick={() => setCurrentLayout(element)}
              allowed={allowed}
            >
              {element}
            </Button>
          );
        })}
      </ButtonGroup>
      <ButtonGroup className="grid-styles" initialActive={0}>
        <Button id="3" onClick={() => setCanvasEditor("new")}>
          New Canvas Editor
        </Button>
        <Button id="4" onClick={() => setCanvasEditor("old")}>
          Old Canvas Editor
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
