import { MdArchitecture, MdCurrencyRupee } from "react-icons/md";
import { FaCogs } from 'react-icons/fa';
import './Services.css';
import { Col, Container, Row } from "react-bootstrap";

const Services = () =>(
    <Container className="pb-5" id="services-section" fluid>
      <p data-aos="fade-up" data-aos-duration="400" className="section-heading text-center my-4">Services</p>
      <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="40" className="card-deck-div">        
        <Row className="card-deck services mb-4 pt-1 d-flex justify-content-center" lg={4} md={4} sm={1} xs={1}>
          <Col className="card-deck-container mt-4" sm>
            <ServiceCard icon={<MdArchitecture className="fas fa-check fa-4x red-text services-icon" />} title="Architecture" />
          </Col>
          <Col className="card-deck-container mt-4" sm>
            <ServiceCard icon={<MdCurrencyRupee className="fas fa-rupee-sign fa-4x blue-text services-icon" />} title="Landscape" />
          </Col>
          <Col className="card-deck-container mt-4" sm>
            <ServiceCard icon={<FaCogs className="fas fa-cogs fa-4x pink-text services-icon" />} title="interior Design" />
          </Col>
        </Row>
      </div>
    </Container>
);


const ServiceCard = ({ icon, title }) => {
    return (
      <div className="card hoverable">
        <div className="card-body text-center">
          {icon}
          <h5 className="font-weight-normal mb-2">{title}</h5>
        </div>
      </div>
    );
  };
  
export default Services;