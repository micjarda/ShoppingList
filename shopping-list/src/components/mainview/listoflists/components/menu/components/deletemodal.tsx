// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectData,
  setData,
} from "../../../../../../features/appcontextSlice";
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
  const data: any = useSelector(selectData);
  const dispatch = useDispatch();

  const deleteList = (id: string) => {
    const newdata: { [key: string]: any } = {};
    Object.keys(data).forEach(function (key: string) {
      if (key !== id) {
        newdata[key] = data[key];
      }
    });
    dispatch(setData(newdata));
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
            <Button onClick={() => deleteList(id)} colorScheme="green" mr={3}>
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
