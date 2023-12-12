import {
  useGetListsQuery,
  useGetUsersQuery,
} from "../../features/api/getshopdata";
import { useDispatch } from "react-redux";
import { setLists, setListState } from "../../features/slices/listSlice";
import { setUsers, setUsersState } from "../../features/slices/userSlice";

import settings from "../../../settings.json";

const Mock = ({ children }: any) => {
  const dispatch = useDispatch();
  const mockdata = settings?.mock;
  const {
    userData,
    isLoading: isUserOnLoading,
    error: isUserOnError,
  } = useGetListsQuery();
  const {
    listData,
    isLoading: isListLoading,
    error: isListOnError,
  } = useGetUsersQuery();

  if (mockdata) {
    dispatch(setUsersState("sucsses"));
    dispatch(setListState("sucsses"));
  }

  if (!mockdata) {
    if (isUserOnError)
      dispatch(setUsersState("error"));

    if (isUserOnLoading)
      dispatch(setUsersState("loading"))

    if (!isUserOnError && !isUserOnLoading) {
      if (userData) dispatch(setUsers(listData));
    }
  }

  if (!mockdata) {
    if (isListOnError)
      dispatch(setListState("error"));

    if (isListLoading)
      dispatch(setListState("loading"));

    if (!isListOnError && !isListLoading) {
      if (listData) dispatch(setLists(listData));
    }
  }
  return children;
};
export default Mock;
