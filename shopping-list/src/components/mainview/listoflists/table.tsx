// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategory,
  selectData,
  selectUser,
  selectUsers,
  setData,
} from "../../../features/appcontextSlice";
// Chakra
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  TableContainer,
} from "@chakra-ui/react";

import Row from "./components/row";

const TableOfLists = () => {
  const dispatch = useDispatch();
  const users: any = useSelector(selectUsers);
  const user: any = useSelector(selectUser);
  const category = useSelector(selectCategory);
  const data: any = useSelector(selectData);

  let rowsdata: any[] = [];
  Object.keys(data).forEach(function (key, index) {
    const pushdata = () => {
      const id = key;
      const profilepic = users[data[key]?.owner]?.profilepic;
      const name = data[key]?.name;
      const attribute = data[key]?.category;
      rowsdata[index] = [id, profilepic, name, attribute];
    };
    if (data[key]?.hosts.includes(user)) {
      if (category === "all") {
        pushdata();
      }
      if (category !== "all" && category === data[key]?.category) {
        pushdata();
      }
    }
  });
  const goToList = (id: string) => {
    window.location.pathname = `/${id}`;
  };

  const deleteList = (id: string) => {
    let newdata: { [key: string]: any } = {};
    Object.keys(data).forEach(function (key: string) {
      if (key !== id) {
        newdata[key] = data[key];
      }
    });
    dispatch(setData(newdata));
  };

  const rows = rowsdata.map((row) => (
    <Row
      key={row}
      id={row[0]}
      profilepic={row[1]}
      nameoflist={row[2]}
      attribute={row[3]}
      searchcallback={goToList}
      deletecallback={deleteList}
    />
  ));

  return (
    <TableContainer>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Profile pic</Th>
            <Th>name</Th>
            <Th>attr</Th>
            <Th>buttons</Th>
          </Tr>
        </Thead>
        <Tbody>{rows}</Tbody>
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
};

export default TableOfLists;
