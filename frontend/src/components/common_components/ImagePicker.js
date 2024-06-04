import { useEffect, useRef, useState } from "react";
import { Button, Row } from "react-bootstrap";
import "./ImagePicker.css";
import { MdDelete, MdFileUpload } from "react-icons/md";
import { BACKEND_BASE_URL } from "../../keys/keys";

const ImagePicker = ({
  initialImagesValue,
  onImagesChanged,
  onInitialImagesChanged,
}) => {
  const [images, setImages] = useState([]);
  const [initialImages, setInitialImages] = useState([]);
  const inputRef = useRef(null);

  const onImageChange = (e) => {
    e.preventDefault();
    console.log(e.target.files);
    var modifiedImages = [...images, ...e.target.files];
    setImages((_) => modifiedImages);
    onImagesChanged(modifiedImages);
  };

  const handleOnSelectImagesClick = (e) => {
    e.preventDefault();
    inputRef.current?.click();
  };

  const onImageDelete = (e, index) => {
    e.preventDefault();
    images.splice(index, 1);
    var modifiedImages = [...images];
    setImages((_) => modifiedImages);
    onImagesChanged(modifiedImages);
  };

  const onInitialImageDelete = (e, index) => {
    e.preventDefault();
    initialImages.at(index).isDeleted = true;
    var modifiedImages = [...initialImages];
    setInitialImages((_) => modifiedImages);
    onInitialImagesChanged(modifiedImages);
  };

  useEffect(() => {
    if (initialImagesValue !== undefined && initialImagesValue !== null) {
      setInitialImages(initialImagesValue);
    }
  }, []);

  const getImageUrl = (image) => {
    return image.imageName;
  };

  return (
    <div className="image-picker-layout">
      <Row className="images-list">
        {initialImages.map((image, index) => {
          if (image.isDeleted == true) {
            return;
          }
          return (
            <div className="images-list-item">
              <img
                src={BACKEND_BASE_URL + "/images/" + image.imageName}
                className="images-list-item-image"
              />
              <MdDelete
                className="images-list-item-icon"
                onClick={(e) => onInitialImageDelete(e, index)}
              />
              <div className="images-list-item-opacity"></div>
            </div>
          );
        })}
        {images.map((image, index) => (
          <div className="images-list-item">
            <img
              src={URL.createObjectURL(image)}
              className="images-list-item-image"
            />
            <MdDelete
              className="images-list-item-icon"
              onClick={(e) => onImageDelete(e, index)}
            />
            <div className="images-list-item-opacity"></div>
          </div>
        ))}
      </Row>
      <input
        type="file"
        ref={inputRef}
        accept="image/*"
        multiple
        onChange={onImageChange}
        hidden
      />

      <Button
        variant="outline-secondary"
        sm
        onClick={handleOnSelectImagesClick}
        className="mt-2"
      >
        <MdFileUpload onClick={handleOnSelectImagesClick} size={20} /> Select
        Images
      </Button>
    </div>
  );
};

export default ImagePicker;
