import { useDispatch, useSelector } from "react-redux";
import { selectData, setData } from "../../../../features/appcontextSlice";
import { Checkbox } from "@chakra-ui/react";

interface IParmasType {
  listid: string;
  item: [string, boolean];
}

const CheckBox: React.FC<IParmasType> = ({ listid, item }) => {
  const itemname = item[0];
  const isitemchecked = item[1];

  const dispatch = useDispatch();
  const data: any = useSelector(selectData);

  const setChecked = (event: any) => {
    const onchangeitemname = event.target.value;
    const updatedData = {
      ...data,
      [listid]: {
        ...data[listid],
        items: data[listid].items.map((item: [string, boolean]) => {
          if (item[0] === onchangeitemname) {
            return [item[0], !isitemchecked];
          }
          return item;
        }),
      },
    };
    dispatch(setData(updatedData));
  };

  return (
    <>
      {
        !item[1] ?
          <Checkbox
            value={itemname}
            onChange={setChecked}
            iconColor="blue.400"
            iconSize="1rem"
          >
            {itemname}
          </Checkbox>
          :
          <Checkbox
            iconColor="blue.400"
            iconSize="1rem"
            isDisabled
            defaultChecked
          >
            {itemname}
          </Checkbox>
      }
    </>
  );
}

export default CheckBox;