import { projectApi } from "../../../api/ProjectApi";
import ProjectForm from "./ProjectForm";
import { useLocation } from "react-router-dom";

const EditProjectForm = () => {
  const editProjectData = useLocation().state?.editProjectData;

  return (
    <ProjectForm
      saveProjectCallBack={(projectData) => projectApi.editProject(projectData)}
      editProjectData={editProjectData}
      formName="Edit Project Form"
    />
  );
};

export default EditProjectForm;
