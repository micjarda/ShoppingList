// Redux
import { useSelector } from "react-redux";
import {
  selectUsers,
  selectUser,
} from "../features/slices/userSlice";
import {
  selectLists,
} from "../features/slices/listSlice";
// Chakra
import { Box, Grid, GridItem } from "@chakra-ui/react";
//Hooks
import { useParams } from "react-router-dom";
// Components
import Navbar from "../components/list/navbar/navbar";
import Container from "../components/list/container/container";
import Sharewith from "../components/list/sharingwith/sharewith";
import ErrorMessage from "../screens/error/error";

const List = () => {
  const { id } = useParams();
  const users: any = useSelector(selectUsers);
  const user: any = useSelector(selectUser);
  const data: any = useSelector(selectLists);

  const listid = id ? id : "001";
  const userprofilepics: any[] = [];
  data[listid.toString()].hosts.map((host: string, index: number) => {
    userprofilepics[index] = users[host]?.profilepic;
  });

  if (!data[listid]?.hosts.includes(user))
    return <ErrorMessage message="Nejste členem" />;

  return (
    <Box>
      <Grid
        templateAreas={`"nav nav"
                        "container sharedwith"`}
        gridTemplateColumns={"1fr auto"}
        h="200px"
        gap="1"
        fontWeight="bold"
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem area={"container"}>
          <Container id={listid} />
        </GridItem>
        <GridItem area={"sharedwith"}>
          <Sharewith profilepics={userprofilepics} />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default List;
