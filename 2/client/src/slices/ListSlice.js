import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/** to-do 리스트를 가져온다. */
export const getList = createAsyncThunk("List/getList", async (payload = null, { rejectWithValue }) => {
  let result = null;

  try {
    result = await axios.get("http://localhost:3001/memo");
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

/** to-do item 한개를 가져온다 */
export const getItem = createAsyncThunk("List/getItem", async (payload = null, { rejectWithValue }) => {
  let result = null;

  try {
    if (!payload) throw new Error("아이디 없음");

    result = await axios.get(`http://localhost:3001/memo/${payload}`);
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

/** to-do item을 추가한다. */
export const addItem = createAsyncThunk("List/addItem", async (payload = null, { rejectWithValue }) => {
  let result = null;

  try {
    if (!payload) throw new Error("등록 정보 없음");
    const { title, body } = payload;

    console.log("hello");
    result = await axios.post(`http://localhost:3001/memo`, { title, body });
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

/** to-do item을 수정한다. */
export const editItem = createAsyncThunk("List/editItem", async (payload = null, { rejectWithValue }) => {
  let result = null;

  try {
    if (!payload) throw new Error("아이디 없음");
    const { id, title, body } = payload;

    console.log(id, title);

    result = await axios.put(`http://localhost:3001/memo/${id}`, { title, body });
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

/** to-do item을 삭제한다. */
export const deleteItem = createAsyncThunk("List/deleteItem", async (payload = null, { rejectWithValue }) => {
  let result = null;

  try {
    if (!payload) throw new Error("아이디 없음");

    result = await axios.delete(`http://localhost:3001/memo/${payload}`);
  } catch (err) {
    result = rejectWithValue(err.response);
  }

  return result;
});

const List = createSlice({
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
      return {
        ...state,
        loading: true,
      };
    },
    [getList.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        list: payload?.data,
        loading: false,
        error: null,
      };
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
      return {
        ...state,
        loading: true,
      };
    },
    [getItem.fulfilled]: (state, { payload }) => {
      return {
        ...state,
        item: payload?.data,
        loading: false,
        error: null,
      };
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

export default List.reducer;
