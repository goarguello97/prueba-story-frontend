import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { PRODUCT_INITIAL_VALUES } from "../constants";
import { getBrands } from "../features/BrandSlice";
import { updateProduct } from "../features/ProductSlice";
import { validationProduct } from "../helpers/validations";
import useFormHook from "../hooks/useFormHook";

const ProductToUpdate = () => {
  const dispatch = useDispatch();
  const { error, product } = useSelector((state) => state.product);
  const { loading, brands } = useSelector((state) => state.brand);

  const { values, handleChange, handleSubmit, errors, setValues } = useFormHook(
    PRODUCT_INITIAL_VALUES,
    updateProduct,
    validationProduct
  );

  useEffect(() => {
    if (product.name) {
      setValues({
        ...PRODUCT_INITIAL_VALUES,
        ...product,
      });
    }
    dispatch(getBrands());
  }, [product, error, setValues]);

  return (
    <Form className="w-75 m-auto mt-4" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Nombre del producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa el producto"
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Descripción del producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="Descripción del producto"
          name="description"
          value={values.description}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Imagen del producto</Form.Label>
        <Form.Control
          type="text"
          placeholder="URL del producto"
          name="image_url"
          value={values.image_url}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Precio del producto</Form.Label>
        <Form.Control
          type="number"
          placeholder="Precio del producto"
          name="price"
          value={values.price}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Marca del producto</Form.Label>
        <Form.Select
          name="brand_id"
          value={values.brand_id}
          onChange={handleChange}
          required
        >
          <option value="">Selecciona una marca</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Modificar producto{" "}
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

export default ProductToUpdate;
