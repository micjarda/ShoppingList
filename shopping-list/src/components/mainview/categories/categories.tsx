// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategory,
  selectData,
  setCategory,
  selectUser,
} from "../../../features/appcontextSlice";
// Chakra
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const Categories = () => {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  const data: any = useSelector(selectData);
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
      <h2>Categories</h2>
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
    </>
  );
};

export default Categories;
