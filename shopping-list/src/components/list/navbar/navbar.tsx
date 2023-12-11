import { ArrowLeftIcon } from "@chakra-ui/icons";
import { IconButton, Wrap, WrapItem } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Wrap>
      <WrapItem>
        <IconButton
          onClick={() => (window.location.pathname = "/")}
          aria-label="Search database"
          icon={<ArrowLeftIcon />}
        />
      </WrapItem>
    </Wrap>
  );
};

export default Navbar;
