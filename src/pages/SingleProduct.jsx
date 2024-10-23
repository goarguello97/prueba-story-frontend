import React, { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../features/ProductSlice";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading, product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct(id));
  }, []);

  return loading ? (
    <section className="container mt-4">
      <h2>Cargando...</h2>
    </section>
  ) : (
    <section className="container mt-4">
      {" "}
      <Card className="m-auto" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.image_url} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Title>{product.brand?.name}</Card.Title>
          <Card.Subtitle>{product.price}</Card.Subtitle>
          <Card.Text>{product.description}</Card.Text>
        </Card.Body>
      </Card>
    </section>
  );
};

export default SingleProduct;
