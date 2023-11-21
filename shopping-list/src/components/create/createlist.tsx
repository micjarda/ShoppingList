// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectData,
  selectUser,
  setData,
} from "../../features/appcontextSlice";
// Chakra
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { Button, Input, Stack } from "@chakra-ui/react";
// Ikony
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const PLUS = <FontAwesomeIcon icon={faPlus} />;
// Hooks
import { useState } from "react";

const CreateList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const user: any = useSelector(selectUser);
  const data: any = useSelector(selectData);
  const [nameOfList, setNameOfList] = useState("");
  const [attribute, setAttribute] = useState("");

  const createList = () => {
    if (nameOfList.length > 0 && attribute.length > 0) {
      const random = Math.round(Math.random() * 1000);
      const dataclone = structuredClone(data);
      dataclone[random.toString()] = {
        owner: user,
        name: nameOfList,
        hosts: [user],
        items: [],
        category: attribute,
      };
      dispatch(setData(dataclone));
      window.location.pathname = "/";
    }
  };

  return (
    <>
      <Button colorScheme="teal" size="sm" onClick={onOpen}>
        {PLUS}Create
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Input
                onChange={(e) => setNameOfList(e.target.value)}
                variant="flushed"
                placeholder="Name of list"
              />
              <Input
                onChange={(e) => setAttribute(e.target.value)}
                variant="flushed"
                placeholder="Attribute"
              />
              <Button onClick={createList} colorScheme="teal" variant="solid">
                Create
              </Button>
              <Button
                onClick={() => (window.location.pathname = "/")}
                colorScheme="red"
                variant="solid"
              >
                Cancel
              </Button>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateList;
