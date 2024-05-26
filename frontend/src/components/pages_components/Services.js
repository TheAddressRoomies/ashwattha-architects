import { MdArchitecture, MdCurrencyRupee } from "react-icons/md";
import { FaCogs } from 'react-icons/fa';
import './Services.css';

const Services = () =>(
    <div className="container pb-5" id="services-section">
      <p data-aos="fade-up" data-aos-duration="400" className="section-heading text-center my-4">Services</p>
      <div data-aos="fade-up" data-aos-duration="300" data-aos-delay="40">
        <div className="card-deck services mb-4 pt-1 d-flex justify-content-sm-evenly">
          <ServiceCard icon={<MdArchitecture className="fas fa-check fa-4x red-text services-icon" />} title="Architecture" />
          <ServiceCard icon={<MdCurrencyRupee className="fas fa-rupee-sign fa-4x blue-text services-icon" />} title="Landscape" />
          <ServiceCard icon={<FaCogs className="fas fa-cogs fa-4x pink-text services-icon" />} title="interior Design" />
        </div>
      </div>
    </div>
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