import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { database } from './config/firebaseConfig';
import { ref, get } from 'firebase/database';

interface Project {
  id: number,
  name: string,
  description: string,
  location: string
  completionDate: string,
  type: string,
  photoUrls: Array<string>,
  videoUrls: Array<string>

}

const App = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsRef = ref(database, 'projects');
        const snapshot = await get(projectsRef);

        if (snapshot.exists()) {
          const data = snapshot.val();
          const projectsList: Project[] = Object.keys(data).map((key, index) => ({
            id: index,
            ...data[key]
          }));
          setProjects(projectsList);
          console.log(projectsList)
        } else {
          console.log('No data available');
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <ul>
        {projects.map(project => (
          <li key={project.id}>
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <p>{project.location}</p>
          </li>
        ))}
      </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
