import React from 'react';

const ProjectForm = () => {
  const handleAddProject = () => {
    // Implement add product logic
  };

  const handleDeleteProject = () => {
    // Implement delete product logic
  };

  return (
    <div>
      <h2>Add/Delete Project</h2>
      <button onClick={handleAddProject}>Add Project</button>
      <button onClick={handleDeleteProject}>Delete Project</button>
    </div>
  );
};

export default ProjectForm;
