import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../config/axiosInstance";

export const getProducts = createAsyncThunk(
  "GET_PRODUCTS",
  async (_, thunkApi) => {
    try {
      const products = await axiosInstance.get(`/api/products`);
      return products.data;
    } catch ({ response }) {
      const { message } = response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getProduct = createAsyncThunk(
  "GET_PRODUCT",
  async (data, thunkApi) => {
    try {
      const product = await axiosInstance.get(`/api/products/product/${data}`);
      return product.data;
    } catch ({ response }) {
      const { message } = response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const addProduct = createAsyncThunk(
  "ADD_PRODUCT",
  async (data, thunkApi) => {
    try {
      const createdProduct = await axiosInstance.post(`/api/products/`, data);
      return createdProduct.data;
    } catch ({ response }) {
      const { message } = response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const updateProduct = createAsyncThunk(
  "UPDATE_PRODUCT",
  async ({ id, body }, thunkApi) => {
    try {
      const updatedProduct = await axiosInstance.put(
        `/api/products/${id}`,
        body
      );
      return updatedProduct.data;
    } catch ({ response }) {
      const { message } = response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "DELETE_PRODUCT",
  async (data, thunkApi) => {
    try {
      const response = await axiosInstance.delete(`/api/products/${data}`);
      return response.data;
    } catch ({ response }) {
      const { message } = response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const ProductSlice = createSlice({
  name: "brand",
  initialState: {
    error: null,
    loading: false,
    product: {},
    products: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    });
    builder.addCase(getProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(addProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteProduct.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default ProductSlice.reducer;
