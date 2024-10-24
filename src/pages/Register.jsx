import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { REGISTER_INITIAL_VALUES } from "../constants";
import { addUser, resetError } from "../features/UserSlice";
import { validationRegister } from "../helpers/validations";
import useFormHook from "../hooks/useFormHook";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error, register } = useSelector((state) => state.user);
  const [flag, setFlag] = useState(false);

  const { values, handleChange, handleSubmit, errors } = useFormHook(
    REGISTER_INITIAL_VALUES,
    addUser,
    validationRegister
  );

  useEffect(() => {
    if (register) {
      navigate("/login");
    }
    if (error) {
      setFlag(true);
      if (flag) {
        setTimeout(() => {
          setFlag(false);
          dispatch(resetError());
        }, 5000);
      }
    }
  }, [error, errors, flag, register]);

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

      <Form.Group className="mb-3" controlId="password2">
        <Form.Label>Repita su contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Repita su contraseña"
          name="password2"
          value={values.password2}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Seleccionar Rol</Form.Label>
        <div>
          <Form.Check
            type="radio"
            label="Admin"
            name="role"
            value="ADMIN"
            onChange={handleChange}
            checked={values.role === "ADMIN"}
            required
          />
          <Form.Check
            type="radio"
            label="User"
            name="role"
            value="USER"
            onChange={handleChange}
            checked={values.role === "USER"}
            required
          />
        </div>
      </Form.Group>
      <Button variant="primary" type="submit">
        Registrarse
      </Button>
      {Object.keys(errors).length !== 0
        ? Object.values(errors).map((error, i) => (
            <div
              key={i}
              className="bg-danger text-light d-flex align-items-center"
            >
              {error}
            </div>
          ))
        : null}
      {error && (
        <div className="bg-danger text-light d-flex align-items-center">
          {error}
        </div>
      )}
    </Form>
  );
};

export default Register;
