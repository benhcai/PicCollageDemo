import "./App.css";
import { useState } from "react";
import Button from "./components/Button/Button.component";
import ButtonGroup from "./components/Button/ButtonGroup/ButtonGroup.component";
import ImagePicker from "./pages/ImagePicker/ImagePicker.component";
import CanvasEditingContainer from "./pages/CanvasEditingContainer/CanvasEditingContainer.component";
// import CanvasHandlesOld from "./components/CanvasHandlesAndEdit/helpers/_CanvasHandles.old/CanvasHandles/CanvasHandles.component";
// import CanvasHandlesEdit from "./components/CanvasHandlesAndEdit/CanvasHandlesAndEdit.component";

function App() {
  const [view, setView] = useState("ImagePicker");
  const [images, setImages] = useState([]);

  const generateView = (view) => {
    if (view === "ImagePicker") return <ImagePicker handleImages={setImages} />;
    if (view === "CanvasEditingContainer") return <CanvasEditingContainer chosenImages={images} />;
  };

  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title">PicCollage Demo App</h1>
        <p className="author">Benjamin Cai</p>
      </div>
      <ButtonGroup className="selector" initialActive={0}>
        <Button onClick={() => setView("ImagePicker")} active={true}>
          Choose Images
        </Button>
        <Button onClick={() => setView("CanvasEditingContainer")}>Edit Images</Button>
      </ButtonGroup>
      {generateView(view)}
    </div>
  );
}

export default App;
