import React, { useState, useEffect } from 'react';
import './ProjectDetails.css';
import backgroundImage from '../../assets/background.avif';
import backgroundImage2 from '../../assets/background2.jpg';
import backgroundImage3 from '../../assets/background3.png';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FaLocationArrow, FaBuilding, FaRulerCombined, FaUsers, FaCalendarAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useParams } from 'react-router-dom';
import Modal from 'react-modal';
import ReactPlayer from 'react-player';
import { projectApi } from "../../api/ProjectApi";
import { BACKEND_BASE_URL } from '../../keys/keys';
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";


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

const ProjectDetails = () => {
  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [projectData, setProjectData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    setIsLoading(true);
  projectApi.fetchProjectById(id)
    .then((response) => {
      console.log(response.data)
      const c = response.data.data;
      setProjectData(c);
      setIsLoading(false);
    }).catch((error)=>{
      setProjectData(data);
      setIsOffline(true);
      console.error(error);
      setIsLoading(false);
    });
  }

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

      <div className="project-header-1">
        <div className="header-content">
          <h1>{projectData.title}</h1>
          <p>{projectData.location}</p>
        </div>
      </div>

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
              <p className='reviews-p'>{projectData.location}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fact-card">
              <FaBuilding />
              <strong>Type</strong>
              <p className='reviews-p'>{projectData.type}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fact-card">
              <FaRulerCombined />
              <strong>Built Up Area</strong>
              <p className='reviews-p'>{projectData.area}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fact-card">
              <FaUsers />
              <strong>Design Team</strong>
              <p className='reviews-p'>{projectData.team}</p>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="fact-card">
              <FaCalendarAlt />
              <strong>Completion Date</strong>
              <p className='reviews-p'>{projectData.completionDate}</p>
            </div>
          </Col>
        </Row>
      </section>

      
        <h2 className='gallery-header'>Gallery</h2>
      <div className="gallery-section">
        <Row>
          {projectData.images.map((image, index) => (
            <Col xs={12} sm={6} md={4} key={index}>
              <div className="gallery-image-container">
                {isOffline ? 
                  <Image
                  src={backgroundImage3}
                  alt={`Gallery Image ${index + 1}`}
                  className="gallery-image"
                  onClick={() => openModal(index)}
                  />
                :
                  <Image
                    src={BACKEND_BASE_URL + "/images/" + image.imageName}
                    alt={`Gallery Image ${index + 1}`}
                    className="gallery-image"
                    onClick={() => openModal(index)}
                  />
                }
              </div>
            </Col>
          ))}
        </Row>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        <div className="modal-inner-content">
          {isOffline ? <Image src={backgroundImage3} alt={`Modal Image ${currentImage + 1}`} className="modal-image" />: 
          <Image src={BACKEND_BASE_URL + "/images/" + projectData.images[currentImage].imageName} alt={`Modal Image ${currentImage + 1}`} className="modal-image" />}
          <div className="modal-navigation">
            <button onClick={prevImage}><IoIosArrowDropleft className="gallery-leftright-icons" color='white'/></button>
            <button onClick={nextImage}><IoIosArrowDropright className="gallery-leftright-icons"  color='white'/></button>
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
