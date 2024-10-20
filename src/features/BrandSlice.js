import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../config/axiosInstance";

export const getBrands = createAsyncThunk("GET_BRANDS", async (_, thunkApi) => {
  try {
    const brands = await axiosInstance.get(`/api/brands`);
    return brands.data;
  } catch ({ response }) {
    const { message } = response.data;
    return thunkApi.rejectWithValue(message);
  }
});

export const getBrand = createAsyncThunk(
  "GET_BRAND",
  async (data, thunkApi) => {
    try {
      const brand = await axiosInstance.get(`/api/brands/brand/${data}`);
      return brand.data;
    } catch ({ response }) {
      const { message } = response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const addBrand = createAsyncThunk(
  "ADD_BRAND",
  async (data, thunkApi) => {
    try {
      const createdBrand = await axiosInstance.post(`/api/brands/`, data);
      return createdBrand.data;
    } catch ({ response }) {
      const { message } = response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const updateBrand = createAsyncThunk(
  "UPDATE_BRAND",
  async ({ id, body }, thunkApi) => {
    try {
      const updatedBrand = await axiosInstance.put(`/api/brands/${id}`, body);
      return updatedBrand.data;
    } catch ({ response }) {
      const { message } = response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const deleteBrand = createAsyncThunk(
  "DELETE_BRAND",
  async (data, thunkApi) => {
    try {
      const response = await axiosInstance.delete(`/api/brands/${data}`);
      return response.data;
    } catch ({ response }) {
      const { message } = response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const BrandSlice = createSlice({
  name: "brand",
  initialState: {
    error: null,
    loading: false,
    brand: {},
    brands: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBrands.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getBrands.fulfilled, (state, action) => {
      state.loading = false;
      state.brands = action.payload;
    });
    builder.addCase(getBrands.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getBrand.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getBrand.fulfilled, (state, action) => {
      state.loading = false;
      state.brand = action.payload;
    });
    builder.addCase(getBrand.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addBrand.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addBrand.fulfilled, (state, action) => {
      state.loading = false;
      state.brand = action.payload;
    });
    builder.addCase(addBrand.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateBrand.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateBrand.fulfilled, (state, action) => {
      state.loading = false;
      state.brand = action.payload;
    });
    builder.addCase(updateBrand.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteBrand.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteBrand.fulfilled, (state, action) => {
      state.loading = false;
    });
    builder.addCase(deleteBrand.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default BrandSlice.reducer;
