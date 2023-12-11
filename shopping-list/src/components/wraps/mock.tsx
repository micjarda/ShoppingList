import { useGetShopDataQuery } from "../../features/api/getshopdata";
import { useDispatch } from "react-redux";
import { setLists } from "../../features/slices/listSlice";

import settings from "../../../settings.json";
import ErrorMessage from "../../screens/error/error";
import Loading from "../../screens/loading/loading";

import Lists from "../../../mock/lists/lists.json";
import Users from "../../../mock/users/users.json";
import { setUser } from "../../features/slices/appcontextSlice";

const Mock = ({ children }: any) => {
  const dispatch = useDispatch();
  const mockdata = settings?.mock;
  const { data, isLoading, error } = useGetShopDataQuery();

  const lists = JSON.stringify(Lists);
  const users = JSON.stringify(Users);

  if (!mockdata) {
    if (error) return <ErrorMessage message="Data se nepovedlo načíst" />;

    if (isLoading) return <Loading />;

    if (!error && !isLoading) {
      if (data) dispatch(setLists(data));
    }
  } else {
    setLists(lists);
    setUser(users);
  }
  return children;
};
export default Mock;
