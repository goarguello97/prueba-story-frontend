import { configureStore } from "@reduxjs/toolkit";
import BrandSlice from "../features/BrandSlice";
import ProductSlice from "../features/ProductSlice";
import UserSlice from "../features/UserSlice";

const store = configureStore({
  reducer: {
    user: UserSlice,
    brand: BrandSlice,
    product: ProductSlice,
  },
});

export default store;
