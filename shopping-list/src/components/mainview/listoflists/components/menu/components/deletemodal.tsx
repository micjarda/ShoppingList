// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectLists,
  setLists,
} from "../../../../../../features/slices/listSlice";
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
  MenuItem,
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
    const newlists: { [key: string]: any } = {};
    Object.keys(lists).forEach(function (key: string) {
      if (key !== id) {
        newlists[key] = lists[key];
      }
    });
    dispatch(setLists(newlists));
  };

  return (
    <>
      <MenuItem onClick={onOpen} icon={<DeleteIcon />}>
        Delete
      </MenuItem>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Potvrďte</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Trvale smazat nákupní seznam</ModalBody>
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
