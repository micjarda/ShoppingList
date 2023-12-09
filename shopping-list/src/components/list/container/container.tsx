// Redux
import { useSelector } from "react-redux";
import { selectData } from "../../../features/appcontextSlice";
import { Stack } from "@chakra-ui/react";

import CheckBox from "./components/checkbox";

interface IParmasType {
  id: string;
}

const Container: React.FC<IParmasType> = ({ id }) => {
  const data: any = useSelector(selectData);
  return (
    <Stack>
      {
        data[id]?.items.map((item: any) => (
          <CheckBox key={Math.random()} listid={id} item={item} />
        ))
      }
    </Stack>);
};

export default Container;
