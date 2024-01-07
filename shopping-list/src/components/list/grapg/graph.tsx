import { CircularProgress, Center, VStack, Box } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import {
  selectCurrentList,
  selectLists,
} from "../../../features/slices/listSlice";

import { selectLang } from "../../../features/slices/userSlice";

const Graph = () => {
  const lang = useSelector(selectLang);
  const id: string = useSelector(selectCurrentList);
  const lists: any = useSelector(selectLists);
  const list = lists[id]?.items;
  const status = {
    completed: 0,
    pending: 0,
  };
  console.log(list, id);
  list.map((task: any) => {
    if (task[1]) status.completed++;
    if (!task[1]) status.pending++;
  });
  console.log(status);
  const value = (status.completed / Object.keys(list).length) * 100;
  return (
    <Center>
      <VStack>
        <Box>
          <CircularProgress
            value={value}
            color={value <= 70 ? "red" : "green"}
            size="100px"
            thickness="4px"
          />
        </Box>
        <Box>
          {value.toFixed(0)}% {lang === "en" ? "Done" : "Splněno"}
        </Box>
      </VStack>
    </Center>
  );
};

export default Graph;
