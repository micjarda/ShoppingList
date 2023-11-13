// Redux
import { useSelector } from "react-redux";
import {
  selectData,
} from "../../../features/appcontextSlice";
import { Checkbox, Stack } from "@chakra-ui/react";

interface IParmasType {
  id: string;
}

const Container: React.FC<IParmasType> = ({ id }) => {
  const setChecked = (e: any) => {
    console.log(e)
    return 0;
  } 

  const data: any = useSelector(selectData);
  const list = data[id]?.items.map((item: any) => (
    (!item[1]) ?
    <Checkbox key={item} onChange={setChecked} iconColor="blue.400" iconSize="1rem">
      {item[0]}
    </Checkbox>
    :
    <Checkbox key={item} iconColor="blue.400" iconSize="1rem" isDisabled defaultChecked>
    {item[0]}
    </Checkbox>
  ));
  return <Stack>{list}</Stack>;
};

export default Container;
