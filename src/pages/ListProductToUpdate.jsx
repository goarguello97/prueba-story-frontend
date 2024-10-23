import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import ProductAdmin from "../components/ProductAdmin";
import { getProducts } from "../features/ProductSlice";

const ListProductToUpdate = () => {
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
          products?.map((product, i) => (
            <ProductAdmin key={i} product={product} />
          ))
        )}
      </ListGroup>
    </div>
  );
};

export default ListProductToUpdate;
