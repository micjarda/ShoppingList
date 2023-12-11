import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

interface IListsContext {
  lists: object;
  selectedCategory: string;
  currentList: object;
}

const Lists = createSlice({
  name: "lists",
  initialState: {
    lists: {
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
  } as IListsContext,
  reducers: {
    setLists: (state, action) => {
      return { ...state, lists: action.payload };
    },
    setCategory: (state, action) => {
      return { ...state, selectedCategory: action.payload };
    },
    setCurrentList: (state, action) => {
      return { ...state, currentList: action.payload };
    },
  },
});

export const selectLists = (state: RootState) => state.lists.lists;
export const selectCategory = (state: RootState) =>
  state.lists.selectedCategory;
export const selectCurrentList = (state: RootState) =>
  state.lists.currentList;


export const { setLists, setCategory, setCurrentList } =
  Lists.actions;
export default Lists.reducer;