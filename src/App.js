import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { persistance } from "./features/UserSlice";
import AddBrand from "./pages/AddBrand";
import AddProduct from "./pages/AddProduct";
import AdminPage from "./pages/AdminPage";
import BrandToUpdate from "./pages/BrandToUpdate";
import Home from "./pages/Home";
import ListBrandToUpdate from "./pages/ListBrandToUpdate";
import ListProductToUpdate from "./pages/ListProductToUpdate";
import Login from "./pages/Login";
import ProductToUpdate from "./pages/ProductToUpdate";
import Register from "./pages/Register";
import SingleProduct from "./pages/SingleProduct";
import PrivateRoute from "./routes/PrivateRoute";
import PrivateRouteAdmin from "./routes/PrivateRouteAdmin";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(persistance());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/product/:id"
          element={
            <PrivateRoute>
              <SingleProduct />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <PrivateRouteAdmin>
              <AdminPage />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/add/brand"
          element={
            <PrivateRouteAdmin>
              <AddBrand />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/add/product"
          element={
            <PrivateRouteAdmin>
              <AddProduct />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/add/product"
          element={
            <PrivateRouteAdmin>
              <AddProduct />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/modify/product"
          element={
            <PrivateRouteAdmin>
              <ListProductToUpdate />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/modify/product/:id"
          element={
            <PrivateRouteAdmin>
              <ProductToUpdate />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/delete/product"
          element={
            <PrivateRouteAdmin>
              <ListProductToUpdate />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/modify/brand"
          element={
            <PrivateRouteAdmin>
              <ListBrandToUpdate />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/modify/brand/:id"
          element={
            <PrivateRouteAdmin>
              <BrandToUpdate />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/delete/brand"
          element={
            <PrivateRouteAdmin>
              <ListBrandToUpdate />
            </PrivateRouteAdmin>
          }
        />
      </Routes>
    </>
  );
}

export default App;
