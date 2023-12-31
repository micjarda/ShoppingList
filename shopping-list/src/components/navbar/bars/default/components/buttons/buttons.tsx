// Knihovny
import { useColorMode, Button, Stack } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
// Komponenty
import CreateList from "../../../../../create/createlist";
import Setlang from "../setlang/setlang";

const nButtons = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { colorMode, toggleColorMode } = useColorMode();
  const buttons = [
    [true, <CreateList />],
    [true, <Setlang />],
    [
      true,
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
  });
  return (
    <Stack spacing={flex.length} direction="row" align="center">
      {flex}
    </Stack>
  );
};

export default nButtons;
