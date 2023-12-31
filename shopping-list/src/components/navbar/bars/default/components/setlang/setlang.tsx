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
import ukflag from "../../../../../../assets/united-kingdom.png";
import czflag from "../../../../../../assets/czech-republic.png";

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
        <img
          src={currentlang === "en" ? ukflag : czflag}
          alt="alt"
          width={20}
          height={10}
        />
      </MenuButton>
      <MenuList>
        {currentlang === "en" ? (
          <MenuItem onClick={() => handleSetLang("cs")}>cs</MenuItem>
        ) : (
          <MenuItem onClick={() => handleSetLang("en")}>en</MenuItem>
        )}
      </MenuList>
    </Menu>
  );
};

export default Setlang;
