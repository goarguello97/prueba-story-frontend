import React, { useEffect } from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import BrandAdmin from "../components/BrandAdmin";
import { getBrands } from "../features/BrandSlice";

const ListBrandToUpdate = () => {
  const dispatch = useDispatch();
  const { loading, brands } = useSelector((state) => state.brand);

  useEffect(() => {
    dispatch(getBrands());
  }, []);

  return (
    <div className="container mt-4">
      <ListGroup defaultActiveKey="#link1">
        {loading ? (
          <h2>Cargando...</h2>
        ) : (
          brands?.map((brand, i) => <BrandAdmin key={i} brand={brand} />)
        )}
      </ListGroup>
    </div>
  );
};

export default ListBrandToUpdate;
