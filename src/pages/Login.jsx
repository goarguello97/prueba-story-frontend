import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_INITIAL_VALUES } from "../constants";
import { loginUser } from "../features/UserSlice";
import { validationLogin } from "../helpers/validations";
import useFormHook from "../hooks/useFormHook";

const Login = () => {
  const navigate = useNavigate();
  const { logged, error } = useSelector((state) => state.user);

  const { values, handleChange, handleSubmit, errors } = useFormHook(
    LOGIN_INITIAL_VALUES,
    loginUser,
    validationLogin
  );

  useEffect(() => {
    if (logged) {
      navigate("/");
    }
  }, [error, logged]);
  console.log(logged);
  return (
    <Form className="w-75 m-auto mt-4" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre de usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa nombre de usuario"
          name="username"
          value={values.username}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Contraseña"
          name="password"
          value={values.password}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Ingresar
      </Button>
      <Button
        className="ms-4"
        variant="secondary"
        type="button"
        as={Link}
        to="/register"
      >
        Registrarse
      </Button>
      {Object.keys(errors).length !== 0
        ? Object.values(errors).map((error, i) => (
            <div key={i} className="login-form-error">
              {error}
            </div>
          ))
        : null}
    </Form>
  );
};

export default Login;
