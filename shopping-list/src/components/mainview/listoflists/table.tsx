// Redux
import { useSelector } from "react-redux";
import {
  selectListsState,
  selectCategory,
  selectLists,
} from "../../../features/slices/listSlice";
import {
  selectUser,
  selectUsers,
} from "../../../features/slices/userSlice";
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
// Screens
import Loading from "../../../screens/loading/loading";
import ErrorMessage from "../../../screens/error/error";
import Row from "./components/row";
//Styles
import "./table.css";

const TableOfLists = () => {
  const users: any = useSelector(selectUsers);
  const user: any = useSelector(selectUser);
  const liststate = useSelector(selectListsState);
  const category = useSelector(selectCategory);
  const lists: any = useSelector(selectLists);

  const rowsdata: any[] = [];
  Object.keys(lists).forEach(function (key, index) {
    const pushdata = () => {
      const id = key;
      const profilepic = users[lists[key]?.owner]?.profilepic;
      const name = lists[key]?.name;
      const attribute = lists[key]?.category;
      rowsdata[index] = [id, profilepic, name, attribute];
    };
    if (lists[key]?.hosts.includes(user)) {
      if (category === "all") {
        pushdata();
      }
      if (category !== "all" && category === lists[key]?.category) {
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
    <>
      {
        liststate === "loading" ?
          <Loading />
          :
          liststate === "error" ?
            <ErrorMessage message="Listy se nepovedlo načíst" />
            :
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Profile pic</Th>
                    <Th>name</Th>
                    <Th className="tag-column">Category</Th>
                    <Th>actions</Th>
                  </Tr>
                </Thead>
                <Tbody>{rows}</Tbody>
                <Tfoot></Tfoot>
              </Table>
            </TableContainer>
      }
    </>
  );
};

export default TableOfLists;
