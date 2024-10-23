import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminPage = () => {
  return (
    /* 
    <section className="container d-flex justify-content-center flex-wrap mt-4">
      <Button className="m-4 " variant="primary" as={Link} to="/add/brand">
        Añadir marca
      </Button>
      <Button className="m-4 " variant="primary" as={Link} to="/add/product">
        Añadir producto
      </Button>
      <Button
        className="m-4 "
        variant="secondary"
        as={Link}
        to="/modify/product"
      >
        Modificar producto
      </Button>
      <Button className="m-4 " variant="secondary" as={Link} to="/modify/brand">
        Modificar marca
      </Button>
      <Button className="m-4 " variant="danger" as={Link} to="/delete/product">
        Eliminar producto
      </Button>
      <Button className="m-4 " variant="danger" as={Link} to="/delete/brand">
        Eliminar marca
      </Button>
    </section>
   */
    <section className="container mt-4">
      <Row className="g-4 justify-content-center">
        <Col xs={12} sm={6} md={6} lg={6}>
          <Button
            className="w-100"
            variant="primary"
            as={Link}
            to="/add/product"
          >
            Añadir producto
          </Button>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Button className="w-100" variant="primary" as={Link} to="/add/brand">
            Añadir marca
          </Button>
        </Col>

        <Col xs={12} sm={6} md={6} lg={6}>
          <Button
            className="w-100"
            variant="secondary"
            as={Link}
            to="/modify/product"
          >
            Modificar producto
          </Button>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Button
            className="w-100"
            variant="secondary"
            as={Link}
            to="/modify/brand"
          >
            Modificar marca
          </Button>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Button
            className="w-100"
            variant="danger"
            as={Link}
            to="/delete/product"
          >
            Eliminar producto
          </Button>
        </Col>
        <Col xs={12} sm={6} md={6} lg={6}>
          <Button
            className="w-100"
            variant="danger"
            as={Link}
            to="/delete/brand"
          >
            Eliminar marca
          </Button>
        </Col>
      </Row>
    </section>
  );
};

export default AdminPage;
