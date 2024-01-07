// Redux
import { useSelector } from "react-redux";
import { selectLists } from "../../../features/slices/listSlice";
import { Stack } from "@chakra-ui/react";

import CheckBox from "./components/checkbox";

interface IParmasType {
  id: string;
}

const Container: React.FC<IParmasType> = ({ id }) => {
  const lists: any = useSelector(selectLists);
  return (
    <Stack padding={5}>
      {lists[id]?.items.map((item: any) => (
        <CheckBox key={Math.random()} listid={id} item={item} />
      ))}
    </Stack>
  );
};

export default Container;
