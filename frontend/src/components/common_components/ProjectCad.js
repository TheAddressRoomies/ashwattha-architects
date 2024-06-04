import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages_components/ProjectsPage.css';

const ProjectCard = ({ id, image, title, description }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const handleHover = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
      setHover(false);
  };

  const handleClick = () => {
    navigate(`/projects/${id}/view`);
  };
  return (
    <div 
    className="projectcard" 
    onMouseEnter={handleHover} 
    onMouseLeave={handleMouseLeave} 
    onClick={handleClick}
    >
    <img className="projectcard-img" src={image} alt={image} />
    <div className={`projectcard-overlay ${hover ? 'visible' : ''}`}>
        <h3 className='overlay-header'>{title}</h3>
        <div className='overlay-text'>Click to view details</div>
    </div>
    </div>
  );
};

export default ProjectCard;