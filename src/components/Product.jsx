import React from "react";
import { ListGroup } from "react-bootstrap";

const Product = ({ product }) => {
  return <ListGroup.Item action>{product.name}</ListGroup.Item>;
};

export default Product;
