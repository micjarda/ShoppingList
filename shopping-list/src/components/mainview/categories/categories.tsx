// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectCategory,
  selectData,
  setCategory,
} from "../../../features/appcontextSlice";
// Chakra
import { Radio, RadioGroup, Stack } from "@chakra-ui/react";

const Categories = () => {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  const data: any = useSelector(selectData);

  let buttons: any[] = [];
  let defaultChecked: number = category === "all" ? -1 : 1;
  Object.keys(data).forEach(function (key, index) {
    if (data[key]?.category === category) defaultChecked = index;
    buttons.push(
      <Radio
        key={index + 1}
        value={index.toString()}
        onChange={() => {
          dispatch(setCategory(data[key]?.category));
        }}
      >
        {data[key]?.category}
      </Radio>,
    );
  });

  return (
    <>
      <h2>Categories</h2>
      <RadioGroup defaultValue={defaultChecked.toString()}>
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
          ,{buttons}
        </Stack>
      </RadioGroup>
    </>
  );
};

export default Categories;
