import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

interface IModeContext {
  users: object;
  data: object;
  selectedCategory: string;
  currentList: object;
  currentUser: string;
}

const appContext = createSlice({
  name: "appcontext",
  initialState: {
    users: {
      "01": {
        username: "micjarda",
        profilepic:
          "https://shorturl.at/ewCLQ",
      },
      "02": {
        username: "Katka",
        profilepic:
          "https://shorturl.at/kmwI7",
      },
      "03": {
        username: "Rostislav",
        profilepic:
          "https://shorturl.at/sxBDN",
      },
    },
    data: {
      "001": {
        owner: "01",
        name: "Jídlo",
        hosts: ["01", "02", "03"],
        items: [
          ["Jablko", false],
          ["Banány", true],
          ["Jahody", true],
        ],
        category: "Výživa",
        tag: 2,
      },
      "002": {
        owner: "02",
        name: "Oblečení",
        hosts: ["03", "01"],
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
        hosts: ["03"],
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
    currentList: {
      id: "",
      hosts: [],
    },
    currentUser: "01",
  } as IModeContext,
  reducers: {
    setData: (state, action) => {
      return { ...state, data: action.payload };
    },
    setCategory: (state, action) => {
      return { ...state, selectedCategory: action.payload };
    },
    setCurrentList: (state, action) => {
      return { ...state, currentList: action.payload };
    },
    setUser: (state, action) => {
      return { ...state, currentUser: action.payload };
    },
  },
});

export const selectUsers = (state: RootState) => state.appcontext.users;
export const selectData = (state: RootState) => state.appcontext.data;
export const selectCategory = (state: RootState) =>
  state.appcontext.selectedCategory;
export const selectCurrentList = (state: RootState) =>
  state.appcontext.currentList;
export const selectUser = (state: RootState) =>
  state.appcontext.currentUser;

export const { setData, setCategory, setCurrentList, setUser } =
  appContext.actions;
export default appContext.reducer;
