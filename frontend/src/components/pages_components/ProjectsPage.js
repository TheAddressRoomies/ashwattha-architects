import React from 'react';
import ProjectList from '../common_components/ProjectList';
import ProjectFilters from '../common_components/ProjectFilters';
import Pagination from '../common_components/Pagination';

const ProjectsPage = () => (
  <div>
    <ProjectFilters />
    <ProjectList />
    <Pagination />
  </div>
);

export default ProjectsPage;