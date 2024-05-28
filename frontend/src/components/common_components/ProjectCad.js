import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages_components/ProjectsPage.css';

const ProjectCard = ({ id, image, title, description }) => {
    const navigate = useNavigate();
  console.log(image)
  const handleClick = () => {
    navigate(`/projects/${id}/view`);
  };

  return (
    <div className="projectcard" onClick={handleClick}>
      <h3>{title}</h3>
      <img  className ="projectcard-img" src={image} alt="Placeholder image representing a project" />
    </div>
  );
};

export default ProjectCard;