import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
// Ikony
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faSearch,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
const HAMBURGER = <FontAwesomeIcon icon={faHamburger} />;
const SEARCH = <FontAwesomeIcon icon={faSearch} />;
const SHARE = <FontAwesomeIcon icon={faShareNodes} />;
import { IconButton } from "@chakra-ui/react";
//Components
import Delete from "../deletemodal";

interface IParmasType {
  id: string;
}

const ButtonMenu: React.FC<IParmasType> = ({ id }) => {
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={HAMBURGER}
        variant="outline"
      />
      <MenuList>
        <MenuItem
          icon={SEARCH}
          onClick={() => (window.location.pathname = `/${id}`)}
        >
          Go to list
        </MenuItem>
        <MenuItem icon={SHARE}>Share</MenuItem>
        <Delete id={id} />
      </MenuList>
    </Menu>
  );
};

export default ButtonMenu;
