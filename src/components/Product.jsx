import React from "react";
import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <ListGroup.Item action as={Link} to={`/product/${product.id}`}>
      {product.name}
    </ListGroup.Item>
  );
};

export default Product;
