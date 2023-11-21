// Redux
import { useSelector } from "react-redux";
import {
  selectCategory,
  selectData,
  selectUser,
  selectUsers,
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

  const rows = rowsdata.map((row) => (
    <Row
      key={row}
      id={row[0]}
      profilepic={row[1]}
      nameoflist={row[2]}
      attribute={row[3]}
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
