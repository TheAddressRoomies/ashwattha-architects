import React, { useState, useEffect } from 'react';
import './ProjectDetails.css';
import backgroundImage from '../../assets/background.avif';
import backgroundImage2 from '../../assets/background2.jpg';
import backgroundImage3 from '../../assets/background3.png';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaLocationArrow, FaBuilding, FaRulerCombined, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import CarouselLayout from './CarouselLayout';


const ProjectDetails = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    // Fetch project data from API
    const fetchProjectData = async () => {
      try {
        // const response = await fetch('http://localhost:8080/projects/1');
        // const data = await response.json();
        const data = {
          title: 'Rajwada House',
          location: 'Narayangaon, Pune',
          description: 'The Brij is envisioned as an immersive environment that will facilitate collaborations between artists and visitors. The museum seeks to create discursive opportunities, promote the exchange of ideas, and inspire practitioners and visitors to access and engage with the arts on a more personal level.',
          type: 'Residential',
          team: 'CP Kukreja Architects (India), Crab Studio (United Kingdom)',
          completionDate: '2024-01-17',
          area: '9,180 sq.ft',
          videoUrl: 'https://www.youtube.com/watch?v=E7JVgaR6XMI&t=49s',
          images: [
            backgroundImage,
            backgroundImage2,
            backgroundImage3,
            backgroundImage,
            backgroundImage2,
            backgroundImage3,
            backgroundImage3,
          ]
        }
        setProjectData(data);
      } catch (error) {
        console.error('Error fetching project data:', error);
      }
    };

    fetchProjectData();
  }, []);

  const openModal = (index) => {
    setCurrentImage(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % projectData.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + projectData.images.length) % projectData.images.length);
  };

  if (!projectData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='project-details'>
    <Container>

      <header className="project-header">
        <div className="header-content">
          <h1>{projectData.title}</h1>
          <p>{projectData.location}</p>
        </div>
      </header>

      <section className="description">
        <p>
          {projectData.description}
        </p>
      </section>

      <section className="project-facts">
        <h2>Project Facts</h2>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <div className="fact-card">
              <FaLocationArrow />
              <strong>Location</strong>
              <p>{projectData.location}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fact-card">
              <FaBuilding />
              <strong>Type</strong>
              <p>{projectData.type}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fact-card">
              <FaRulerCombined />
              <strong>Built Up Area</strong>
              <p>{projectData.area}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fact-card">
              <FaUsers />
              <strong>Design Team</strong>
              <p>{projectData.team}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fact-card">
              <FaCalendarAlt />
              <strong>Completion Date</strong>
              <p>{projectData.completionDate}</p>
            </div>
          </Col>
        </Row>
      </section>

      <section className="gallery-section">
        <h2>Gallery</h2>
        <Row>
          {projectData.images.map((image, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <div className="gallery-image-container">
                <Image
                  src={image}
                  alt={`Gallery Image ${index + 1}`}
                  className="gallery-image"
                  onClick={() => openModal(index)}
                />
              </div>
            </Col>
          ))}
        </Row>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="modal-inner-content">
          <Image src={projectData.images[currentImage]} alt={`Modal Image ${currentImage + 1}`} className="modal-image" />
          <div className="modal-navigation">
            <button onClick={prevImage}>&lt;</button>
            <button onClick={nextImage}>&gt;</button>
          </div>
        </div>
      </Modal>

      <section className="walkthrough-section">
        <h2>Walkthrough</h2>
        <div className="video-wrapper">
          <ReactPlayer
            url={projectData.videoUrl}
            className="react-player"
            width="100%"
            height="100%"
            controls
          />
        </div>
      </section>


    </Container>
    </div>
  );
};

export default ProjectDetails;
