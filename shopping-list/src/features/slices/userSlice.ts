import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IModeContext {
  users: object;
  currentUser: string;
}

const Users = createSlice({
  name: "users",
  initialState: {
    users: {
      "01": {
        username: "micjarda",
        profilepic: "https://shorturl.at/ewCLQ",
      },
      "02": {
        username: "Katka",
        profilepic: "https://shorturl.at/kmwI7",
      },
      "03": {
        username: "Rostislav",
        profilepic: "https://shorturl.at/sxBDN",
      },
    },
    currentUser: "01",
  } as IModeContext,
  reducers: {
    setUsers: (state, action) => {
      return { ...state, users: action.payload };
    },
    setUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
  },
});

export const selectUsers = (state: RootState) => state.users.users;
export const selectUser = (state: RootState) =>
  state.users.currentUser;

export const { setUsers, setUser } =
  Users.actions;
export default Users.reducer;
