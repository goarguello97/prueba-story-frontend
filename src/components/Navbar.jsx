import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../features/UserSlice";

const NavbarComponent = () => {
  const { logged, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    if (!user.name) {
      window.location.reload();
      navigate("/login");
    }
  };

  useEffect(() => {}, []);
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          StoryDots
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {logged ? (
              <>
                <Nav.Link as={Link} to="/">
                  Inicio
                </Nav.Link>

                {user.role === "ADMIN" ? (
                  <Nav.Link as={Link} to="/admin">
                    Admin
                  </Nav.Link>
                ) : null}
                <Nav.Link className="secondary" onClick={() => handleLogout()}>
                  Salir
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Ingresar
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Registrarse
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
