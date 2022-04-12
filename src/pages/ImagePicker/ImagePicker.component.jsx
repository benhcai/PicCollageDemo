import "./ImagePicker.styles.css";
import image1 from "../../resources/image1.jpeg";
import image5b from "../../resources/image5b.jpeg";
import image3 from "../../resources/image3.jpeg";
// import image4 from "../../resources/image4.jpeg";
import { useEffect, useState } from "react";
import Button from "../../components/Button/Button.component";

const ImagePicker = (props) => {
  const [chosenImages, setChosenImages] = useState("example");
  const [imagesExample, setImagesExample] = useState([]);
  const [imagesCustom, setImagesCustom] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setImagesExample([image1, image5b, image3]);
  }, []);

  useEffect(() => {
    if (chosenImages === "example") props.handleImages(imagesExample);
    if (chosenImages === "custom") props.handleImages(imagesCustom);
  }, [imagesExample, imagesCustom, chosenImages, props]);

  const renderImages = (images) => {
    return images.map((image) => {
      return (
        <div key={String(image)} className="ImagePicker-image-containers">
          <img
            src={image}
            alt={String(image)}
            style={{ height: "200px" }}
            className={"ImagePicker-image"}
          />
        </div>
      );
    });
  };

  const handleFetch = (url, setter) => {
    setLoading(true);
    fetch(url, { mode: "cors" })
      .then((res) => res.blob())
      .then((imgBlob) => URL.createObjectURL(imgBlob))
      .then((img) => {
        setLoading(false);
        setter((prevImgs) => [...prevImgs, img]);
      })
      .catch((err) => {
        console.log(err);
        setError(String(err));
      });
  };

  const [error, setError] = useState("");

  const [formValue, setFormValue] = useState(
    "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
  );
  const [formValueCustom, setFormValueCustom] = useState("https://picsum.photos/400");

  return (
    <div className="ImagePicker">
      <div className="image-options--left">
        <div
          className="images-options-container"
          style={chosenImages === "custom" ? { opacity: "0.5" } : {}}
        >
          <h2>Image Picker - Example</h2>
          <div className="ImagePicker--layout">
            {renderImages(imagesExample)}
            {loading === true && chosenImages === "example" ? "Loading..." : ""}
          </div>
          <div className="ImagePicker--form">
            {imagesExample.length < 4 ? "Fetch image from URL " : ""}
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                value={formValue}
                onChange={(e) => setFormValue(e.target.value)}
              ></input>
            </form>
            <Button onClick={() => handleFetch(formValue, setImagesExample)}>
              Fetch last image
            </Button>
          </div>
        </div>
        <Button
          className="select-option"
          onClick={() => {
            setChosenImages("example");
          }}
        >
          Select Option
        </Button>
      </div>
      <div className="image-options--right">
        <div
          className="images-options-container"
          style={chosenImages === "example" ? { opacity: "0.5" } : {}}
        >
          <h2>Image Picker - Custom</h2>
          <div className="ImagePicker--layout">
            {renderImages(imagesCustom)}
            {loading === true && chosenImages === "custom" ? "Loading..." : ""}
          </div>
          <div className="ImagePicker--form">
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                value={formValueCustom}
                onChange={(e) => setFormValueCustom(e.target.value)}
              ></input>
            </form>
            <Button onClick={() => handleFetch(formValueCustom, setImagesCustom)}>
              Fetch last image
            </Button>
          </div>
        </div>
        <Button
          className="select-option"
          onClick={() => {
            setChosenImages("custom");
          }}
        >
          Select Option
        </Button>
      </div>
      {error ? error : ""}
    </div>
  );
};

export default ImagePicker;
