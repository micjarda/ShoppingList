// Knihovny
import { useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const MONEY = <FontAwesomeIcon icon={faPlus} />;

const nButtons = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const buttons = [
    [
      true,
      <Button
        onClick={() => (window.location.pathname = "/upload")}
        variant={"solid"}
        colorScheme={"teal"}
        size={"sm"}
        mr={4}
        leftIcon={MONEY}
      >
        Create
      </Button>,
    ],
    [
      false,
      <Button
        onClick={toggleColorMode}
        variant={"solid"}
        colorScheme={"teal"}
        size={"sm"}
        mr={4}
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>,
    ],
  ];
  const flex = buttons.map((button, index) => {
    if (button[0]) return <i key={index}>{button[1]}</i>;
    if (button[0]) return <i key={index}></i>;
    if (!button[0]) return <i key={index}>{button[1]}</i>;
  });
  return <>{flex}</>;
};

export default nButtons;
