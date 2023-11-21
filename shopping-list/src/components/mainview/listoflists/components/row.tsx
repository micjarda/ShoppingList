import { SearchIcon } from "@chakra-ui/icons";

import { Tr, Td } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
// Ikony
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
const SHARE = <FontAwesomeIcon icon={faShareNodes} />;
import { IconButton, Stack } from "@chakra-ui/react";
// Komponenty
import Delete from "./deletemodal";

interface IParmasType {
  id: string;
  profilepic: string;
  nameoflist: string;
  attribute: string;
  searchcallback: Function;
}

const Row: React.FC<IParmasType> = ({
  id,
  profilepic,
  nameoflist,
  attribute,
  searchcallback,
}) => {
  return (
    <Tr>
      <Td>
        <Avatar name="Dan Abrahmov" src={profilepic} />
      </Td>
      <Td>{nameoflist}</Td>
      <Td>
        <Tag size={"md"} variant="solid" colorScheme="teal">
          {attribute}
        </Tag>
      </Td>
      <Td>
        <Stack spacing={4} direction="row" align="center">
          <IconButton
            onClick={() => searchcallback(id)}
            aria-label="Search database"
            icon={<SearchIcon />}
          />
          <IconButton aria-label="Search database" icon={SHARE} />
          <Delete id={id} />
        </Stack>
      </Td>
    </Tr>
  );
};

export default Row;
