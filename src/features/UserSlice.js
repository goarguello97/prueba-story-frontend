import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../config/axiosInstance";

export const getUsers = createAsyncThunk("GET_USERS", async (_, thunkApi) => {
  try {
    const users = await axiosInstance.get("/api/users/");
    return users.data;
  } catch ({ response }) {
    const { message } = response.data;
    return thunkApi.rejectWithValue(message);
  }
});

export const getUser = createAsyncThunk("GET_USER", async (data, thunkApi) => {
  try {
    const user = await axiosInstance.get(`/api/users/user/${data}`);
    return user.data;
  } catch ({ response }) {
    const { message } = response.data;
    return thunkApi.rejectWithValue(message);
  }
});

export const addUser = createAsyncThunk("ADD_USER", async (data, thunkApi) => {
  try {
    const createdUser = await axiosInstance.post(`/api/users/`, data);
    return createdUser.data;
  } catch ({ response }) {
    const { message } = response.data;
    return thunkApi.rejectWithValue(message);
  }
});

export const updateUser = createAsyncThunk(
  "UPDATE_USER",
  async ({ id, body }, thunkApi) => {
    try {
      const updatedUser = await axiosInstance.put(
        `/api/users/user/${id}`,
        body
      );
      return updatedUser.data;
    } catch ({ response }) {
      const { message } = response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "DELETE_USER",
  async (data, thunkApi) => {
    try {
      const response = await axiosInstance.delete(`/api/users/user/${data}`);
      return response.data;
    } catch ({ response }) {
      const { message } = response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "LOGIN_USER",
  async (data, thunkApi) => {
    try {
      const response = await axiosInstance.post(`/api/users/login`, data);
      return response.data;
    } catch ({ response }) {
      const { message } = response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const persistance = createAsyncThunk(
  "PERSISTENCE",
  async (_, thunkApi) => {
    try {
      const response = await axiosInstance.get(`/api/users/me`);
      return response.data;
    } catch ({ response }) {
      const { message } = response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "LOGOUT_USER",
  async (_, thunkApi) => {
    try {
      const response = await axiosInstance.get(`/api/users/logout`);
      return response.data;
    } catch ({ response }) {
      const { message } = response.data;
      return thunkApi.rejectWithValue(message);
    }
  }
);
export const UserSlice = createSlice({
  name: "user",
  initialState: {
    error: null,
    loading: false,
    logged: false,
    user: {},
    users: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(addUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(updateUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = {};
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(loginUser.pending, (state, action) => {
      state.loading = true;
      state.logged = false;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loading = false;
      state.logged = true;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loading = false;
      state.logged = false;
      state.error = action.payload;
    });
    builder.addCase(persistance.pending, (state, action) => {
      state.loading = true;
      state.logged = false;
    });
    builder.addCase(persistance.fulfilled, (state, action) => {
      state.loading = false;
      state.logged = true;
      state.user = action.payload;
    });
    builder.addCase(persistance.rejected, (state, action) => {
      state.loading = false;
      state.logged = false;
      state.error = action.payload;
    });
    builder.addCase(logoutUser.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = {};
    });
    builder.addCase(logoutUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default UserSlice.reducer;
