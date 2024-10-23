import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  deleteProduct,
  getProduct,
  getProducts,
} from "../features/ProductSlice";

const ProductAdmin = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { error } = useSelector((state) => state.product);
  const handleUpdate = () => {
    dispatch(getProduct(product.id));
    if (!error) {
      navigate(`/modify/product/${product.id}`);
    }
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm("¿Desea eliminar?")) {
      dispatch(deleteProduct(id)).then(() => {
        dispatch(getProducts());
      });
    }
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {product.name}
      {pathname === "/modify/product" ? (
        <Button onClick={handleUpdate}>Editar</Button>
      ) : (
        <Button
          variant="danger"
          onClick={() => handleDeleteProduct(product.id)}
        >
          Eliminar producto
        </Button>
      )}
    </ListGroup.Item>
  );
};

export default ProductAdmin;
