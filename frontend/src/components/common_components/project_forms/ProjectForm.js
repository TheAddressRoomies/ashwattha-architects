import React, { useEffect, useState } from "react";
import { Button, Col, FloatingLabel, Form, Spinner } from "react-bootstrap";
import ImagePicker from "../ImagePicker";
import { useNavigate } from "react-router-dom";
import "./ProjectForm.css";

const ProjectForm = ({ saveProjectCallBack, editProjectData, formName }) => {
  const navigate = useNavigate();
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const defaultFormData = {
    title: "",
    category: "",
    location: "",
    description: "",
    type: "",
    team: "",
    completionDate: "",
    area: "",
    rating: "",
    videoUrl: "",
  };
  const [formData, setFormData] = useState(defaultFormData);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const projectData = new FormData();

    projectData.append(
      "project",
      new Blob([JSON.stringify(formData)], { type: "application/json" }),
      ""
    );
    for (var i = 0; i < images.length; i++) {
      projectData.append("images", images[i]);
    }

    saveProjectCallBack(projectData)
      .then((_) => {
        navigate("/admin/dashboard");
      })
      .catch((_) => {})
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (editProjectData !== undefined && editProjectData !== null) {
      setFormData(editProjectData);
    }
  }, []);

  return (
    <Form className="d-flex flex-column project-form" onSubmit={handleSubmit}>
      <h2>{formName}</h2>
      <Col lg={6}>
        <Col className="mt-2">
          <Form.Group
            controlId="form-project-title"
            className="project-form-field"
          >
            <FloatingLabel
              controlId="form-project-title"
              label="Title"
              className="contact-us-form-field-label"
            >
              <Form.Control
                type="text"
                value={formData.title}
                placeholder="Title"
                onChange={handleOnChange}
                name="title"
                required
              />
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col className="mt-2">
          <Form.Group
            controlId="form-project-category"
            className="project-form-field"
          >
            <FloatingLabel
              controlId="form-project-category"
              label="Category"
              className="contact-us-form-field-label"
            >
              <Form.Control
                type="text"
                value={formData.category}
                placeholder="Category"
                onChange={handleOnChange}
                name="category"
                required
              />
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col className="mt-2">
          <Form.Group
            controlId="form-project-location"
            className="project-form-field"
          >
            <FloatingLabel
              controlId="form-project-location"
              label="Location"
              className="contact-us-form-field-label"
            >
              <Form.Control
                type="text"
                value={formData.location}
                placeholder="Location"
                onChange={handleOnChange}
                name="location"
                required
              />
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col className="mt-2">
          <Form.Group
            controlId="form-project-decription"
            className="project-form-field"
          >
            <FloatingLabel
              controlId="form-project-description"
              label="Description"
              className="contact-us-form-field-label"
            >
              <Form.Control
                type="text"
                value={formData.description}
                placeholder="Description"
                onChange={handleOnChange}
                name="description"
                required
              />
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col className="mt-2">
          <Form.Group
            controlId="form-project-type"
            className="project-form-field"
          >
            <FloatingLabel
              controlId="form-project-type"
              label="Type"
              className="contact-us-form-field-label"
            >
              <Form.Control
                type="text"
                value={formData.type}
                placeholder="Type"
                onChange={handleOnChange}
                name="type"
                required
              />
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col className="mt-2">
          <Form.Group
            controlId="form-project-team"
            className="project-form-field"
          >
            <FloatingLabel
              controlId="form-project-team"
              label="Team"
              className="contact-us-form-field-label"
            >
              <Form.Control
                type="text"
                value={formData.team}
                placeholder="Team"
                onChange={handleOnChange}
                name="team"
                required
              />
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col className="mt-2">
          <Form.Group
            controlId="form-project-completion-date"
            className="project-form-field"
          >
            <FloatingLabel
              controlId="form-project-completion-date"
              label="Completion Date"
              className="contact-us-form-field-label"
            >
              <Form.Control
                type="date"
                value={formData.completionDate}
                placeholder="Completion Date"
                onChange={handleOnChange}
                name="completionDate"
                required
              />
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col className="mt-2">
          <Form.Group
            controlId="form-project-area"
            className="project-form-field"
          >
            <FloatingLabel
              controlId="form-project-area"
              label="Area"
              className="contact-us-form-field-label"
            >
              <Form.Control
                type="text"
                value={formData.area}
                placeholder="Area"
                onChange={handleOnChange}
                name="area"
                required
              />
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col className="mt-2">
          <Form.Group
            controlId="form-project-rating"
            className="project-form-field"
          >
            <FloatingLabel
              controlId="form-project-rating"
              label="Rating"
              className="contact-us-form-field-label"
            >
              <Form.Select
                type="select"
                value={formData.rating}
                placeholder="Rating"
                onChange={handleOnChange}
                name="rating"
                required
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </Form.Select>
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col className="mt-2">
          <ImagePicker
            initialImagesValue={editProjectData?.images}
            onImagesChanged={(images) => {
              setImages(images);
            }}
            onInitialImagesChanged={(initialImages) => {
              setFormData((prevState) => ({
                ...prevState,
                ["images"]: initialImages,
              }));
            }}
          />
        </Col>

        <Col className="mt-2">
          <Form.Group
            controlId="form-project-video-url"
            className="project-form-field"
          >
            <FloatingLabel
              controlId="form-project-video-url"
              label="Video Url"
              className="contact-us-form-field-label"
            >
              <Form.Control
                type="text"
                value={formData.videoUrl}
                placeholder="Video Url"
                onChange={handleOnChange}
                name="videoUrl"
                required
              />
            </FloatingLabel>
          </Form.Group>
        </Col>

        <Col className="mt-4">
          <Button
            type="submit"
            variant="primary"
            className="project-submit-button"
            style={{ display: "flex", justifyContent: "center" }}
            disabled={isLoading}
          >
            {isLoading && (
              <Spinner
                animation="border"
                role="status"
                style={{ height: 25, width: 25, marginRight: 10 }}
              ></Spinner>
            )}
            {isLoading ? "Uploading..." : "Submit"}
          </Button>
        </Col>
      </Col>
    </Form>
  );
};

export default ProjectForm;
