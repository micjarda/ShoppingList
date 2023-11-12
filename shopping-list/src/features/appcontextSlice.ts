import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface IModeContext {
  users: object;
  data: object;
  selectedCategory: string;
  currentUser: string;
}

const appContext = createSlice({
  name: "appcontext",
  initialState: {
    users: {
      "01": {
        username: "micjarda",
        profilepic:
          "https://tse3.mm.bing.net/th/id/OIP.4OlDoeQOA1csOMTLrLAsDAAAAA?pid=ImgDet&rs=1",
      },
      "02": {
        username: "Katka",
        profilepic:
          "https://play-lh.googleusercontent.com/8I_JG4YjHR1KyfSiTzKhAmJPlx7k9rJ6EUSdj8t-tLQRGUdH8csDzV7kP9mzF6bBUQ0",
      },
      "03": {
        username: "Rostislav",
        profilepic:
          "https://tse2.mm.bing.net/th/id/OIP.fdHmnwrQfo9dNIULWzYQ4QHaE7?pid=ImgDet&rs=1",
      },
    },
    data: {
      "001": {
        owner: "01",
        name: "Jídlo",
        hosts: ["Katka", "Rostislav"],
        items: [
          ["Jablko", false],
          ["Banány", false],
          ["Jahody", true],
        ],
        category: "Výživa",
        tag: 2,
      },
      "002": {
        owner: "02",
        name: "Oblečení",
        hosts: ["Rostislav"],
        items: [
          ["Boty", false],
          ["Bunda", false],
          ["Čepice", true],
        ],
        category: "Šatník",
        tag: 1,
      },
      "003": {
        owner: "03",
        name: "Nářadí",
        hosts: ["Rostislav"],
        items: [
          ["Boty", false],
          ["Bunda", false],
          ["Čepice", true],
        ],
        category: "Dílna",
        tag: 1,
      },
    },
    selectedCategory: "all",
    currentUser: "01",
  } as IModeContext,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setUser: (state, action) => {
      state.currentUser = action.payload;
    },
  },
});

export const selectUsers = (state: RootState) => state.appcontext.users;
export const selectData = (state: RootState) => state.appcontext.data;
export const selectCategory = (state: RootState) =>
  state.appcontext.selectedCategory;
export const selectUser = (state: RootState) => state.appcontext.currentUser;

export const { setData, setCategory, setUser } = appContext.actions;
export default appContext.reducer;
