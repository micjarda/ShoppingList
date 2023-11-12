// Redux
// import { useDispatch, useSelector } from "react-redux";
// import {
//   selectCategory,
//   selectUsers,
//   selectData,
//   setCategory,
// } from "../features/appcontextSlice";

import { ArrowLeftIcon } from "@chakra-ui/icons";
import { IconButton, Tag, Wrap, WrapItem } from "@chakra-ui/react";
// Ikony
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faTrash } from "@fortawesome/free-solid-svg-icons";
const SHARE = <FontAwesomeIcon icon={faShareNodes} />;
const TRASH = <FontAwesomeIcon icon={faTrash} />;

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
