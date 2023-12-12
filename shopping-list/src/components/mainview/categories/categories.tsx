// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectListsState,
  selectCategory,
  selectLists,
  setCategory,
} from "../../../features/slices/listSlice";
import { selectUser } from "../../../features/slices/userSlice";
// Chakra
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";
// Screens
import Loading from "../../../screens/loading/loading";
import ErrorMessage from "../../../screens/error/error";

const Categories = () => {
  const dispatch = useDispatch();
  const liststate = useSelector(selectListsState);
  const category = useSelector(selectCategory);
  const data: any = useSelector(selectLists);
  const user: any = useSelector(selectUser);

  const buttons: any[] = [];

  const categoryes: any = [];
  Object.keys(data).forEach(function (key) {
    if (data[key]?.hosts.includes(user)) {
      if (!categoryes.includes(data[key]?.category)) {
        categoryes.push(data[key]?.category);
      }
    }
  });

  categoryes.map((cat: any, index: any) => {
    buttons.push(
      <Radio
        key={index + 1}
        value={cat}
        onChange={() => {
          dispatch(setCategory(cat));
        }}
      >
        {cat}
      </Radio>,
    );
  });

  return (
    <>
      {
        liststate === "loading" ?
          <Loading />
          :
          liststate === "error" ?
            <ErrorMessage message="" />
            :
            <RadioGroup defaultValue={category}>
              <Stack>
                <Radio
                  key={0}
                  value={"all"}
                  onChange={() => {
                    dispatch(setCategory("all"));
                  }}
                >
                  All
                </Radio>
                {buttons}
              </Stack>
            </RadioGroup>
      }

    </>
  );
};

export default Categories;
