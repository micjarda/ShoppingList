// React Hooks
import { ReactNode } from "react";
// Knihovny
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// Ikonky
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const CART = <FontAwesomeIcon icon={faHome} />;
// Soubory
import logo from "../../../../assets/logo.jpg";
// Styly
import "../../navbar.css";
// components
import Buttons from "./components/buttons/buttons";
import Menu from "./components/menu/menu";
import { useSelector } from "react-redux";
import { selectLang } from "../../../../features/slices/userSlice";

const Default = () => {
  const lang = useSelector(selectLang);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const Links = [["/", CART, lang === "en" ? "Home" : " Domů"]];

  const NavLink = ({
    children,
    href,
  }: {
    children: ReactNode;
    href: string;
  }) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
      href={href}
    >
      {children}
    </Link>
  );
  return (
    <>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <img
              className="logo"
              src={logo}
              alt="Pneuway logo"
              onClick={() => (window.location.href = "/")}
            />
          </Box>
          <HStack
            as={"nav"}
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
            {Links.map((link, index) => (
              <NavLink href={link[0].toString()} key={index}>
                <b className="left-icon">{link[1]}</b>
                {link[2]}
              </NavLink>
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Buttons />
          <Menu />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {Links.map((link, index) => (
              <NavLink href={link[0].toString()} key={index}>
                <b className="left-icon">{link[1]}</b>
                {link[2]}
              </NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </>
  );
};

export default Default;
