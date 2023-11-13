// Redux
// import { useDispatch, useSelector } from "react-redux";
// import {
//   selectCategory,
//   selectUsers,
//   selectData,
//   setCategory,
// } from "../features/appcontextSlice";

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
      <WrapItem>
        <h1>Create a new list</h1>
      </WrapItem>
    </Wrap>
  );
};

export default Navbar;
