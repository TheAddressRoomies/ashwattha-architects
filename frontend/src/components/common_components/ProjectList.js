import React from 'react';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, name: 'Project 1' },
  { id: 2, name: 'Project 2' },
];

const ProjectList = () => (
  <ul>
    {projects.map(project => (
      <li key={project.id}>
        <Link to={`/projects/${project.id}`}>{project.name}</Link>
      </li>
    ))}
  </ul>
);

export default ProjectList;
