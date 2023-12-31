// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectLang,
  setLang,
} from "../../../../../../features/slices/userSlice";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Setlang = () => {
  const dispatch = useDispatch();
  const currentlang = useSelector(selectLang);
  const handleSetLang = (lang: string) => {
    dispatch(setLang(lang));
  };
  return (
    <Menu>
      <MenuButton
        variant={"solid"}
        colorScheme={"teal"}
        size={"sm"}
        as={Button}
        rightIcon={<ChevronDownIcon />}
      >
        {currentlang}
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleSetLang("en")}>en</MenuItem>
        <MenuItem onClick={() => handleSetLang("cs")}>cs</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Setlang;
