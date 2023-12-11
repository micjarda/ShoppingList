// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectLists, setLists }
  from "../../../../features/slices/listSlice";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
// Ikony
import { DeleteIcon } from "@chakra-ui/icons";

interface IParmasType {
  id: string;
}

const Delete: React.FC<IParmasType> = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const lists: any = useSelector(selectLists);
  const dispatch = useDispatch();

  const deleteList = (id: string) => {
    const newdata: { [key: string]: any } = {};
    Object.keys(lists).forEach(function (key: string) {
      if (key !== id) {
        newdata[key] = lists[key];
      }
    });
    dispatch(setLists(newdata));
  };

  return (
    <>
      <IconButton
        onClick={onOpen}
        aria-label="Delete database"
        icon={<DeleteIcon />}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Confirm</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Permanently delete shopping list</ModalBody>
          <ModalFooter>
            <Button
              onClick={() => deleteList(id)}
              colorScheme="green"
              mr={3}
            >
              Yes
            </Button>
            <Button onClick={onClose} colorScheme="red" mr={3}>
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Delete;
