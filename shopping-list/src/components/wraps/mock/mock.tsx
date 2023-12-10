import { useGetShopDataQuery } from "../../../features/api/getshopdata"
import { useDispatch } from "react-redux";
import { setData } from "../../../features/appcontextSlice";

import settings from "../../../../settings.json";
import ErrorMessage from "../../../screens/error/error";
import Loading from "../../../screens/loading/loading";

const AppLogout = ({ children }: any) => {
  const dispatch = useDispatch()
  const mockdata = settings?.mock;
  const { data, isLoading, error } = useGetShopDataQuery();

  if (!mockdata) {
    if (error)
      return <ErrorMessage message="Data se nepovedlo načíst" />;

    if (isLoading)
      return <Loading />

    if (!error && !isLoading) {
      if (data)
        dispatch(setData(data));
    }
  }
  return children;
}
export default AppLogout;
