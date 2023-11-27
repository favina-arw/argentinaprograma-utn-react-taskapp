import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { BsBasket, BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { Task } from "../../types/Task";
import { TaskService } from "../../services/TaskService";
import { toast } from "react-toastify";
import ModalAgregarTarea from "../ModalAgregarTarea/ModalAgregarTarea";

const NavBar = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const createTask = async (newTask: Task) => {
    try {
      const result = await TaskService.createTask(newTask);
      console.log("Nueva tarea agregada: ", result.id);
      navigate(`/detalle/${result.id}`);

      toast.success("Tarea creada correctamente!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
    } catch (error) {
      toast.error("Error al crear tarea", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 2000,
      });
      console.log("Error al crear tarea: ", error);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React- TaskApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={() => navigate(`/`)}>Inicio</Nav.Link>

              <NavDropdown title="Tareas" id="basic-nav-dropdown">
                <NavDropdown.Item>Por hacer</NavDropdown.Item>
                <NavDropdown.Item>En produccion</NavDropdown.Item>
                <NavDropdown.Item>Por testear</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Completada</NavDropdown.Item>
              </NavDropdown>

              {/* AGREGAR NUEVA TAREA */}
              <Nav.Link onClick={handleShowModal}>Agregar tarea</Nav.Link>
            </Nav>
            <Nav className="d-none d-md-flex ms-auto">
              <Nav.Link href="#carrito">
                <BsBasket />
              </Nav.Link>

              <Nav.Link href="#usuario">
                <BsPerson />
              </Nav.Link>
            </Nav>

            <div className="d-md-none">
              <ul className="nav-bar-nav me-auto-mb-2 mb-md-0">
                <li className="nav-item">
                  <a className="nav-link" href="#ticket">
                    Ticket
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#perfil">
                    Perfil
                  </a>
                </li>
              </ul>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <ModalAgregarTarea
        showModal={showModal}
        handleClose={handleCloseModal}
        createTask={createTask}
      />
    </>
  );
};

export default NavBar;
