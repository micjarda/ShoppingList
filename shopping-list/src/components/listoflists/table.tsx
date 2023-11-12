// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategory,
  selectData,
  selectUsers,
  setCategory,
} from "../../features/appcontextSlice";
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
  // const dispatch = useDispatch();
  const users: any = useSelector(selectUsers);
  const category = useSelector(selectCategory);
  const data: any = useSelector(selectData);

  let rowsdata: any[] = [];
  Object.keys(data).forEach(function (key, index) {
    if(category === "all") {
      const profilepic = users[data[key]?.owner]?.profilepic;
      const name = data[key]?.name;
      const attribute = data[key]?.category;
      rowsdata[index] = [profilepic, name, attribute];
    }
    if(category !== "all" && category === data[key]?.category) {
      const profilepic = users[data[key]?.owner]?.profilepic;
      const name = data[key]?.name;
      const attribute = data[key]?.category;
      rowsdata[index] = [profilepic, name, attribute];
    }
  });

  const rows = rowsdata.map((row) => (
    <Row
      profilepic={row[0]}
      nameoflist={row[1]}
      attribute={row[2]}
    />
  ))

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
        <Tbody>
          {rows}
        </Tbody>
        <Tfoot></Tfoot>
      </Table>
    </TableContainer>
  );
};

export default TableOfLists;
