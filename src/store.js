import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 20 },
  reducers: {
    changeName(state) {
      state.name = "park";
    },
    plusAge(state, action) {
      state.age += action.payload;
    },
  },
});

let cartList = createSlice({
  name: "cartList",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    changeCount(state, action) {
      state[action.payload].count += 1;
    },
  },
});

export let { changeName, plusAge } = user.actions;
export let { changeCount } = cartList.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cartList: cartList.reducer,
  },
});
