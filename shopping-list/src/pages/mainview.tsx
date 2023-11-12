import Categories from "../components/categories/categories";
import List from "./list";
import Navbar from "../components/navbar/navbar";

import { Grid, GridItem, Box } from "@chakra-ui/react";

const Mainview = () => {
  return (
    <Box>
      <Grid
        templateAreas={`"nav nav"
                        "list category"`}
        gridTemplateColumns={"1fr 150px"}
        h="200px"
        gap="1"
        fontWeight="bold"
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem area={"list"}>
          <List />
        </GridItem>
        <GridItem pl="3" area={"category"}>
          <Categories />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Mainview;
