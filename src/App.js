import "./App.css";
import { useState } from "react";
import Button from "./components/button/button";
import ButtonGroup from "./components/button/button-group/buttongroup";
import ImagePicker from "./pages/imagepicker/imagepicker";
import CanvasEditingContainer from "./pages/canvasEditingContainer/canvasEditingContainer";
import CanvasNewGrid from "./components/canvasHandles/canvasHandles";

function App() {
  const [view, setView] = useState("ImagePicker");
  const [images, setImages] = useState([]);

  const generateView = (view) => {
    if (view === "ImagePicker") return <ImagePicker handleImages={setImages} />;
    if (view === "CanvasEditingContainer") return <CanvasEditingContainer images={images} />;
    if (view === "ResizableGrid") return <CanvasNewGrid images={images} />;
  };

  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title">PicCollage Demo App</h1>
        <p className="author">Benjamin Cai</p>
      </div>
      <ButtonGroup className="selector">
        <Button onClick={() => setView("ImagePicker")}>Choose Images</Button>
        <Button onClick={() => setView("CanvasEditingContainer")}>Edit Images</Button>
        <Button onClick={() => setView("ResizableGrid")}>Grid With Handles</Button>
      </ButtonGroup>
      {generateView(view)}
    </div>
  );
}

export default App;
