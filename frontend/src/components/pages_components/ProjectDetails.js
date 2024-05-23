import  React from 'react';
import { useState, useEffect } from 'react';
import { database } from '../../config/firebaseConfig';
import { ref, get } from 'firebase/database';

const ProjectDetails = () => {
  const [project, setProject] = useState();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const docRef = ref(database, 'projects/0');
        const docSnap = await get(docRef);

        if (docSnap.exists()) {
          setProject(docSnap.val());
        } else {
          console.log("No Project found with given id")
        }
      } catch (err) {
        console.log('Error fetching document ');
      } finally {
      }
    };

    fetchProject();
  }, []);

  if (!project) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p><strong>Location:</strong> {project.location}</p>
      <p><strong>Completion Date:</strong> {project.completionDate}</p>
      <p><strong>Type:</strong> {project.type}</p>
      <div>
        <h2>Client Testimonials</h2>
        <p>{project.clientTestimonials}</p>
      </div>
      <div>
        <h2>Photos</h2>
        {project.photos && project.photos.map((photo, index) => (
          <iframe key={index} src={photo} title={`Project Images ${index + 1}`} style={{ width: '400px', margin: '10px' }} />
        ))}
      </div>
      


      {/* https://drive.google.com/file/d/1fwvubEQPUG95Qh4AiG6uP3-FagA7Avn6/view?usp=drive_link */}
{/* <iframe src="https://drive.google.com/file/d/1fwvubEQPUG95Qh4AiG6uP3-FagA7Avn6/preview" style={{width:'1000', height:'1000'}} scrolling="no"></iframe> */}
{/* <iframe src="https://drive.google.com/file/d/1fwvubEQPUG95Qh4AiG6uP3-FagA7Avn6/preview" width="1000" height="500"  scrolling="no"></iframe> */}
      <div>
        <h2>Videos</h2>
        {project.videos && project.videos.map((video, index) => (
          <div key={index}>
            <iframe width="560" height="315" src={video} title={`Project Video ${index + 1}`} frameBorder="0" allowFullScreen></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectDetails;

