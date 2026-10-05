import {
  createSlice,
  createAsyncThunk
} from "@reduxjs/toolkit";

const API_URL="http://localhost:3001/todos"
// read all items
export const fetchItems = createAsyncThunk(
  "todos/fetchItems",

  async () => {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch items");
    }

    return response.json();
  }
);

//add new item
export const addItems = createAsyncThunk(
  "todos/addItems",

  async (item) => {
    const response = await fetch(API_URL, {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify(item)
    });

    if (!response.ok) {
      throw new Error("Failed to add item");
    }

    return response.json();
  }
);