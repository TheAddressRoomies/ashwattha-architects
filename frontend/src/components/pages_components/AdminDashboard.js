import React, { useEffect, useState } from "react";
import { sessionStorage } from "../../storage/SessionStorage";
import { authApi } from "../../api/AuthApi";
import { useNavigate, useOutletContext } from "react-router-dom";
import "./AdminDashboard.css";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { projectApi } from "../../api/ProjectApi";
import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import DeleteProject from "../common_components/DeleteProject";

const AdminDashboardPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [projects, setProjects] = useState([]);
  const session = useOutletContext();
  const navigate = useNavigate();

  const onLogout = async (e) => {
    e.preventDefault();
    setLoading(true);
    sessionStorage.clear();
    await authApi.logout();
    session.setData(null);
    setLoading(false);
    navigate("/admin/login");
  };

  const handleAddProject = (e) => {
    e.preventDefault();
    navigate("/admin/add-project-form");
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = () => {
    projectApi
      .fetchProjects()
      .then((projects) => {
        setProjects(projects);
      })
      .catch((error) => {});
  };

  return (
    <Container className="admin-dashboard-page">
      <div className="admin-dashboard-layout">
        <Row className="d-flex justify-content-between">
          <Col sm={10}>
            <h1>Admin Dashboard</h1>
          </Col>
          <Col sm={2}>
            <Row>
              <Col sm={8} className="mt-2">
                <Button onClick={handleAddProject}>Add Project</Button>
              </Col>
              <Col sm={1} className="mt-2">
                <Button disabled={isLoading} onClick={onLogout}>
                  {isLoading ? "loading..." : "Logout"}
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>

        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Project Title</th>
              <th>Category</th>
              <th>Type</th>
              <th style={{ textAlign: "end" }}>Edit</th>
              <th style={{ textAlign: "center" }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <tr>
                <td>{project.id}</td>
                <td>{project.title}</td>
                <td>{project.category}</td>
                <td>{project.type}</td>
                <td style={{ textAlign: "end" }}>
                  <Button
                    variant="outline-secondary"
                    onClick={(e) => {
                      navigate("/admin/edit-project-form", {
                        state: {
                          editProjectData: project,
                        },
                      });
                    }}
                  >
                    <FaPenToSquare />
                  </Button>
                </td>
                <td>
                  <DeleteProject
                    projectId={project.id}
                    onDeleteSuccess={fetchProjects}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default AdminDashboardPage;
