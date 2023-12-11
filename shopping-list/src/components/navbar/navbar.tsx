// Knihovny
import { Box, useColorModeValue } from "@chakra-ui/react";
// Bars
import Default from "./bars/default/default";

const Navbar = () => {
  let bar;
  switch ("normal") {
    case "normal":
      bar = <Default />;
      break;
    default:
      bar = <Default />;
      break;
  }
  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="sticky"
        top={0}
        zIndex={1}
      >
        {bar}
      </Box>
    </>
  );
};

export default Navbar;
