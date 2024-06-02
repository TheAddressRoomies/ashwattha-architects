import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCad';
import { BACKEND_BASE_URL } from '../../keys/keys.js';

import backgroundImage from '../../assets/background.avif';
import backgroundImage2 from '../../assets/background2.jpg';
import backgroundImage3 from '../../assets/background3.png';

const projectsDummy = [
    { id: 1, images: [{ imagePath: backgroundImage}], title: 'Project 1', description: 'Description 1' },
    { id: 2, images: [{ imagePath:backgroundImage2}], title: 'Project 2', description: 'Description 2' },
    { id: 3, images: [{ imagePath:backgroundImage3}], title: 'Project 2', description: 'Description 2' },
    { id: 4, images: [{ imagePath:backgroundImage}], title: 'Project 1', description: 'Description 1' },
    { id: 2, images: [{ imagePath:backgroundImage2}], title: 'Project 2', description: 'Description 2' },
    { id: 2, images: [{ imagePath:backgroundImage3}], title: 'Project 2', description: 'Description 2' },
    { id: 1, images: [{ imagePath:backgroundImage}], title: 'Project 1', description: 'Description 1' },
    { id: 2, images: [{ imagePath:backgroundImage2}], title: 'Project 2', description: 'Description 2' },
    { id: 2, images: [{ imagePath:backgroundImage3}], title: 'Project 2', description: 'Description 2' },
];

const ProjectList = () => {

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with your actual API URL
    const apiURL = BACKEND_BASE_URL + "/projects";

    const fetchProjects = async () => {
      try {
        const response = await fetch(apiURL);
        const result = await response.json();

        if (result.responseCode === 200) {
          setProjects(result.data.data.map);
        } else {
          setError("Failed to fetch data");
        }
      } catch (error) {
        setProjects(projectsDummy)
        // setError("Error fetching data");
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }
  
  return (
  <div className="cards">
      {projects.map(project => (
        <ProjectCard id={project.id} image={project.images[0].imagePath} title={project.title} description={project.description} />
      ))}
    </div>
)
};

export default ProjectList;
