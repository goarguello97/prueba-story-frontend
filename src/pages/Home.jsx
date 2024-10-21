import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Product";
import { getProducts } from "../features/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <div className="container mt-4">
      <ListGroup defaultActiveKey="#link1">
        {loading ? (
          <h2>Cargando...</h2>
        ) : (
          products?.map((product, i) => <Product key={i} product={product} />)
        )}
      </ListGroup>
    </div>
  );
};

export default Home;
