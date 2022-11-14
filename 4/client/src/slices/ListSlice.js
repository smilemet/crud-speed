import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getList = createAsyncThunk("ListSlice/getList", async (payload = null, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axios.get("http://localhost:3001/memo");
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

export const getItem = createAsyncThunk("ListSlice/getItem", async (payload = null, { rejectWithValue }) => {
  let result = null;

  try {
    if (!payload) throw new Error("데이터가 없습니다.");

    const { id } = payload;
    result = await axios.get(`http://localhost:3001/memo/${id}`);
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

export const addItem = createAsyncThunk("ListSlice/addItem", async (payload = null, { rejectWithValue }) => {
  let result = null;

  try {
    if (!payload) throw new Error("데이터가 없습니다.");

    const { title, body } = payload;
    result = await axios.post("http://localhost:3001/memo", { title, body });
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

/** 수정 */
export const editItem = createAsyncThunk(
  "ListSlice/editItem",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      if (!payload) throw new Error("데이터가 없습니다.");
      const { id, title, body } = payload;

      result = await axios.put(`http://localhost:3001/memo/${id}`, { title, body });
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

/** 삭제 */
export const deleteItem = createAsyncThunk(
  "ListSlice/deleteItem",
  async (payload = null, { rejectWithValue }) => {
    let result = null;

    try {
      if (!payload) throw new Error("아이디가 없습니다.");
      const { id } = payload;

      result = await axios.delete(`http://localhost:3001/memo/${id}`);
    } catch (err) {
      result = rejectWithValue(err.response);
    }

    return result;
  }
);

const ListSlice = createSlice({
  name: "list",
  initialState: {
    list: null,
    item: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getList.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getList.fulfilled]: (state, { payload }) => {
      return { ...state, list: payload?.data, loading: false, error: null };
    },
    [getList.rejected]: (state, { payload }) => {
      return {
        ...state,
        list: payload?.data,
        loading: false,
        error: {
          code: payload?.status ? payload.status : 500,
          message: payload?.statusText ? payload.statusText : "Server Error",
        },
      };
    },
    [getItem.pending]: (state, { payload }) => {
      return { ...state, loading: true };
    },
    [getItem.fulfilled]: (state, { payload }) => {
      return { ...state, item: payload?.data, loading: false, error: null };
    },
    [getItem.rejected]: (state, { payload }) => {
      return {
        ...state,
        item: payload?.data,
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
