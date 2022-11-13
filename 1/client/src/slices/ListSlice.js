import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getList = createAsyncThunk("ListSlice/getList", async (payload = null, { rejectWithValue }) => {
  let result = null;

  try {
    const { data } = await axios.get("http://localhost:3001/memo");

    result = data;
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

export const getItem = createAsyncThunk("ListSlice/getList", async (payload = null, { rejectWithValue }) => {
  let result = null;

  try {
    const { data } = await axios.get(`http://localhost:3001/memo/${payload.id}`);

    result = data;
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

export const addList = createAsyncThunk("ListSlice/addList", async (payload = null, { rejectWithValue }) => {
  const { title, body } = payload;
  let result = null;

  try {
    const { data } = await axios.post(`http://localhost:3001/memo/`, { title, body });
    result = data;
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

export const editList = createAsyncThunk(
  "ListSlice/editList",
  async (payload = null, { rejectWithValue }) => {
    const { id, title, body } = payload;
    let result = null;

    try {
      const { data } = await axios.put(`http://localhost:3001/memo/${payload.id}`, { title, body });
      result = data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

export const deleteList = createAsyncThunk(
  "ListSlice/deleteList",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      const { data } = await axios.delete(`http://localhost:3001/memo/${payload.id}`);

      result = data;
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

const ListSlice = createSlice({
  name: "list",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getList.pending]: (state, { payload }) => {
      return { state, loading: true };
    },
    [getList.fulfilled]: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },
    [getList.rejected]: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error",
        },
      };
    },
    [getItem.pending]: (state, { payload }) => {
      return { state, loading: true };
    },
    [getItem.fulfilled]: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: null,
      };
    },
    [getItem.rejected]: (state, { payload }) => {
      return {
        data: payload,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error",
        },
      };
    },
  },
});

export default ListSlice.reducer;
