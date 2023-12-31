// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectLists,
  setLists,
} from "../../../../features/slices/listSlice";
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
import { selectLang } from "../../../../features/slices/userSlice";

interface IParmasType {
  id: string;
}

const Delete: React.FC<IParmasType> = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const lists: any = useSelector(selectLists);
  const lang = useSelector(selectLang);

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
          <ModalHeader>
            {lang === "en" ? "Confirm" : "Potvrdit"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {lang === "en"
              ? "Permanently delete shopping list"
              : "Trvale odstranit"}
          </ModalBody>
          <ModalFooter>
            <Button
              onClick={() => deleteList(id)}
              colorScheme="green"
              mr={3}
            >
              {lang === "en" ? "Yes" : "Ano"}
            </Button>
            <Button onClick={onClose} colorScheme="red" mr={3}>
              {lang === "en" ? "No" : "Ne"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Delete;
