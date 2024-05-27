import React from 'react';
import '../pages_components/ProjectsPage.css';

const ProjectFilters = () => {
  return (
    <div className="filters">
      <button className="active">All</button>
      <button className="inactive">Architecture</button>
      <button className="inactive">Interior Design</button>
      <button className="inactive">Landscape</button>
    </div>
  );
};

export default ProjectFilters;