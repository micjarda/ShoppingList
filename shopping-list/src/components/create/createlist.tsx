// Redux
import { useDispatch, useSelector } from "react-redux";
import { selectLists, setLists } from "../../features/slices/listSlice";
import { selectUser, selectLang } from "../../features/slices/userSlice";
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
  Select,
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
  const lists: any = useSelector(selectLists);
  const lang = useSelector(selectLang);
  const [nameOfList, setNameOfList] = useState("");
  const [category, setCategory] = useState("");

  const createList = () => {
    if (nameOfList.length > 0 && category.length > 0) {
      const random = Math.round(Math.random() * 1000);
      const listsclone = structuredClone(lists);
      listsclone[random.toString()] = {
        owner: user,
        name: nameOfList,
        hosts: [user],
        items: [],
        category: category,
      };
      dispatch(setLists(listsclone));
      window.location.pathname = "/";
    }
  };

  const allcategoryes: any[] = [];
  Object.keys(lists).forEach(function (key, index) {
    allcategoryes.push(
      <option key={index} value={lists[key].category}>
        {lists[key].category}
      </option>,
    );
  });

  return (
    <>
      <Button colorScheme="teal" size="sm" onClick={onOpen}>
        {PLUS}
        {lang === "en" ? "Add" : "Přidat"}
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {lang === "en" ? "Create a new list" : "Vytvořit nový seznam"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={3}>
              <Input
                onChange={(e) => setNameOfList(e.target.value)}
                variant="flushed"
                placeholder={
                  lang === "en" ? "Name of list" : "Název seznamu"
                }
              />
              <Input
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                variant="flushed"
                placeholder={lang === "en" ? "Category" : "Kategorie"}
              />
              <Select
                placeholder={
                  lang === "en"
                    ? "Select existing category"
                    : "Vybrat kategorii"
                }
                onChange={(e) => setCategory(e.target.value)}
              >
                {allcategoryes}
              </Select>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              {lang === "en" ? "Close" : "Zavřít"}
            </Button>
            <Button
              onClick={createList}
              colorScheme="blue"
              variant="solid"
            >
              {lang === "en" ? "Create" : "Vytvořit"}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreateList;
