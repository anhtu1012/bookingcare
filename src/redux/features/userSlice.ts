import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../RootReducer";
import { User } from "../../model/user";
//default value
const initialState: null | User = null;

export const userSlice = createSlice({
  name: "user",
  initialState, //nếu tên phêu bằng tên biến thì sẽ không cần initialState: initialState nó tự hiểu
  reducers: {
    login: (state, actions) => actions.payload, //truyền vào actions.payload === user
    logout: () => initialState, //null
  },
});
export const { login, logout } = userSlice.actions;
export const selectUser = (store: RootState) => store.user;
export default userSlice.reducer;
