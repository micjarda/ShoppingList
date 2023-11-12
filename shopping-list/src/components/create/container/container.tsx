// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategory,
  selectUsers,
  selectData,
  setCategory,
  selectUser,
  setData,
} from "../../../features/appcontextSlice";
// Hooks
import { Button, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

const Container = () => {
  const dispatch = useDispatch();
  const user: any = useSelector(selectUser);
  const data: any = useSelector(selectData);
  const [nameOfList, setNameOfList] = useState("");
  const [attribute, setAttribute] = useState("");

  const createList = () => {
    if (nameOfList.length > 0 && attribute.length > 0) {
      const random = Math.round(Math.random() * 1000);
      const dataclone = structuredClone(data);
      dataclone[random.toString()] = {
        owner: user,
        name: nameOfList,
        hosts: [user],
        items: [],
        category: attribute,
      };
      dispatch(setData(dataclone));
      window.location.pathname = "/";
    }
  };

  return (
    <Stack spacing={3}>
      <Input
        onChange={(e) => setNameOfList(e.target.value)}
        variant="flushed"
        placeholder="Name of list"
      />
      <Input
        onChange={(e) => setAttribute(e.target.value)}
        variant="flushed"
        placeholder="Attribute"
      />
      <Button onClick={createList} colorScheme="teal" variant="solid">
        Create
      </Button>
      <Button
        onClick={() => (window.location.pathname = "/")}
        colorScheme="red"
        variant="solid"
      >
        Cancel
      </Button>
    </Stack>
  );
};

export default Container;
