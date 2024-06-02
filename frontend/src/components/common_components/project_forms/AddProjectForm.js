import { projectApi } from "../../../api/ProjectApi";
import ProjectForm from "./ProjectForm";

const AddProjectForm = () => {
  return (
    <ProjectForm
      saveProjectCallBack={(projectData) => projectApi.addProject(projectData)}
      formName="Add Project Form"
    />
  );
};

export default AddProjectForm;
