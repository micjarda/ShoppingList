// Chakra
import { Box, Grid, GridItem } from "@chakra-ui/react";
// Komponenty
import Navbar from "../components/create/navbar/navbar";
import Container from "../components/create/container/container";
const CreateANewList = () => {
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
          <Container />
        </GridItem>
        <GridItem area={"sharedwith"}></GridItem>
      </Grid>
    </Box>
  );
};

export default CreateANewList;
