import { useState } from "react";
import { projectApi } from "../../api/ProjectApi";
import { FaTrashCan } from "react-icons/fa6";
import { Button } from "react-bootstrap";

const DeleteProject = ({projectId, onDeleteSuccess}) => {
    const [isLoading, setLoading] = useState(false);

    const handleDelete = (e) => {
        e.preventDefault();
        setLoading(true);
        projectApi.deleteProject(projectId)
        .then((_) => {
            onDeleteSuccess();
        })
        .catch((_)=>{})
        .finally(() =>{
            setLoading(false);
        })
    }

    return (
        <div style={{textAlign:'center'}}>
            {
                isLoading 
                ? <> ...</> 
                :<Button variant="outline-secondary" onClick={handleDelete}>
                    <FaTrashCan/>
                </Button>
            }
        </div>
    );
}

export default DeleteProject;