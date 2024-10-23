import { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  deleteBrand,
  getBrand,
  getBrands,
  resetError,
} from "../features/BrandSlice";

const BrandAdmin = ({ brand }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { error, brands } = useSelector((state) => state.brand);
  const [flag, setFlag] = useState(false);

  const handleUpdate = () => {
    dispatch(getBrand(brand.id));
    if (!error) {
      navigate(`/modify/brand/${brand.id}`);
    }
  };

  const handleDeleteBrand = (id) => {
    if (window.confirm("¿Desea eliminar?")) {
      dispatch(deleteBrand(id)).then(() => {
        if (!error) {
          dispatch(getBrands());
        }
      });
    }
  };

  useEffect(() => {
    if (error) {
      setFlag(true);
      if (flag) {
        setTimeout(() => {
          setFlag(false);
          dispatch(resetError());
        }, 5000);
      }
    }
  }, [error, flag, dispatch]);
  return (
    <>
      <ListGroup.Item className="d-flex justify-content-between">
        {brand.name}
        {pathname === "/modify/brand" ? (
          <Button onClick={handleUpdate}>Editar</Button>
        ) : (
          <Button variant="danger" onClick={() => handleDeleteBrand(brand.id)}>
            Eliminar marca
          </Button>
        )}
      </ListGroup.Item>
      {error && (
        <ListGroup.Item className="bg-danger text-light d-flex align-items-center">
          {error}
        </ListGroup.Item>
      )}
    </>
  );
};

export default BrandAdmin;
