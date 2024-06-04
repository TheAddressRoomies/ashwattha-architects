import React, { useState, useEffect }  from 'react';
import ProjectCard from '../common_components/ProjectCad';
import { projectApi } from "../../api/ProjectApi";

import backgroundImage from '../../assets/background.avif';
import backgroundImage2 from '../../assets/background2.jpg';
import backgroundImage3 from '../../assets/background3.png';

const projectsDummy = [
  { id: 1, images: [{ imagePath: backgroundImage}], title: 'Project 1', description: 'Description 1', category: "Interior",},
  { id: 2, images: [{ imagePath:backgroundImage2}], title: 'Project 2', description: 'Description 2' },
  { id: 3, images: [{ imagePath:backgroundImage3}], title: 'Project 2', description: 'Description 2' },
  { id: 4, images: [{ imagePath:backgroundImage}], title: 'Project 1', description: 'Description 1' },
  { id: 2, images: [{ imagePath:backgroundImage2}], title: 'Project 2', description: 'Description 2' },
  { id: 2, images: [{ imagePath:backgroundImage3}], title: 'Project 2', description: 'Description 2' },
  { id: 1, images: [{ imagePath:backgroundImage}], title: 'Project 1', description: 'Description 1' },
  { id: 2, images: [{ imagePath:backgroundImage2}], title: 'Project 2', description: 'Description 2' },
  { id: 2, images: [{ imagePath:backgroundImage3}], title: 'Project 2', description: 'Description 2' },
];

const ProjectsPage = () => {
  
  const img1 = require.context("../../../images", true);

  const [projects, setProjects] = useState([]); 
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, [currentPage, selectedCategory]);

  const fetchProjects = () => {
    setIsLoading(true);
  projectApi.fetchProjects(currentPage, 8, selectedCategory === 'All' ? '' : selectedCategory)
    .then((response) => {
      const { content, totalPages } = response.data.data;
      setProjects(content);
      setFilteredProjects(content);
      setTotalPages(totalPages);
      setIsLoading(false);
    }).catch((error)=>{
      console.error(error);
      setIsLoading(false);
    });
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(0);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  
  return (
  <div>
     <div className="filters">
        {['All', 'Architecture', 'Interior', 'Landscape'].map(category => (
          <button
            key={category}
            className={selectedCategory === category ? 'active' : 'inactive'}
            onClick={() => handleCategoryChange(category)}
          >
            {category}
          </button>
        ))}
      </div>
    <div className="cards">
      {projects.map(project => (
        <ProjectCard key={project.id} id={project.id} image={img1("./" + project.images[0].imageName)} title={project.title} description={project.description} />
      ))}
    </div>
    <div className="pagination">
        <button className='direction'
          onClick={() => handlePageChange(Math.max(currentPage - 1, 0))}
          disabled={currentPage === 0}
        >
          Previous
        </button>
        {[...Array(totalPages).keys()].map(page => (
          <button
            key={page}
            className={currentPage === page ? 'active' : 'inactive'}
            onClick={() => handlePageChange(page)}
          >
            {page + 1}
          </button>
        ))}
        <button className='direction'
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages - 1))}
          disabled={currentPage === totalPages - 1}
        >
          Next
        </button>
      </div>
  </div>
)};

export default ProjectsPage;