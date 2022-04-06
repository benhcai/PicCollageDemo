import "./styles.css";
import image1 from "../../resources/image1.jpeg";
import image2 from "../../resources/image5.jpeg";
import image3 from "../../resources/image3.jpeg";
import image4 from "../../resources/image4.jpeg";
import { useEffect, useState } from "react";
import Button from "../../components/button/button";

const ImagePicker = (props) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setImages([image1, image2, image3]);
  }, []);

  useEffect(() => {
    props.handleImages(images);
  }, [props, images]);

  const renderImages = (images) => {
    return images.map((image) => {
      return (
        <div key={String(image)}>
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

  const handleFetch = () => {
    setLoading(true);
    fetch(formValue)
      .then((res) => res.blob())
      .then((imgBlob) => URL.createObjectURL(imgBlob))
      .then((img) => {
        setLoading(false);
        setImages((prevImgs) => [...prevImgs, img]);
      })
      .catch((err) => console.log(err));
  };

  const [formValue, setFormValue] = useState(
    "https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
  );

  return (
    <div className="ImagePicker">
      <h2>Image Picker</h2>
      <div className="ImagePicker--layout">
        {renderImages(images)}
        {loading === true ? "Loading..." : ""}
      </div>

      <div className="ImagePicker--form">
        {images.length < 4 ? "Fetch image from URL " : ""}
        <form className="ImagePicker--form">
          <input
            type="text"
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
          ></input>
        </form>
        <Button onClick={handleFetch}>Fetch last image</Button>
      </div>
    </div>
  );
};

export default ImagePicker;
