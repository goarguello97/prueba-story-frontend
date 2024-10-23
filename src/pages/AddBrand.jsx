import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BRAND_INITIAL_VALUES } from "../constants";
import { addBrand } from "../features/BrandSlice";
import { validationBrand } from "../helpers/validations";
import useFormHook from "../hooks/useFormHook";

const AddBrand = () => {
  const { error, brand } = useSelector((state) => state.brand);

  const { values, handleChange, handleSubmit, errors, setValues } = useFormHook(
    BRAND_INITIAL_VALUES,
    addBrand,
    validationBrand
  );

  useEffect(() => {
    if (brand && !error) {
      setValues(BRAND_INITIAL_VALUES);
    }
  }, [brand, error, setValues]);

  return (
    <Form className="w-75 m-auto mt-4" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre de la marca</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa la marca"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Imagen del logo</Form.Label>
        <Form.Control
          type="text"
          placeholder="URL del logo"
          name="logo_url"
          value={values.logo_url}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar marca{" "}
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

export default AddBrand;
