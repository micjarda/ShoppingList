import { SearchIcon, EditIcon, DeleteIcon, } from "@chakra-ui/icons";

import { Tr, Td } from "@chakra-ui/react";
import { Avatar } from "@chakra-ui/react";
import { Tag } from "@chakra-ui/react";
import { IconButton, Stack } from '@chakra-ui/react'

interface IParmasType {
  profilepic: string;
  nameoflist: string;
  attribute: string;
}

const Row: React.FC<IParmasType> = ({ profilepic, nameoflist, attribute }) => {
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
      <Stack spacing={4} direction='row' align='center'>
        <IconButton aria-label='Search database' icon={<SearchIcon />}/>
        <IconButton aria-label='Search database' icon={<EditIcon />}/>
        <IconButton aria-label='Search database' icon={<DeleteIcon />}/>
      </Stack>
      </Td>
    </Tr>
  );
};

export default Row;
