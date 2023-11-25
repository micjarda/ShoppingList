import Categories from "../components/mainview/categories/categories";
import TableOfLists from "../components/mainview/listoflists/table";
import Navbar from "../components/navbar/navbar";

import { Grid, GridItem, Box } from "@chakra-ui/react";

const Mainview = () => {
  return (
    <Box>
      <Grid
        templateAreas={`"nav nav"
                        "list category"`}
        gridTemplateColumns={{ base: "1fr", md: "1fr 150px" }}
        h="200px"
        gap="1"
        fontWeight="bold"
      >
        <GridItem area={"nav"}>
          <Navbar />
        </GridItem>
        <GridItem area={"list"}>
          <TableOfLists />
        </GridItem>
        <GridItem pl="3" area={"category"} className="category">
          <Categories />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Mainview;
