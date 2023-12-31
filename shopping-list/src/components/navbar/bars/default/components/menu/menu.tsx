// Knihovny
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  selectUser,
  selectUsers,
  selectUserState,
  setUser,
} from "../../../../../../features/slices/userSlice";
// Screens
import Loading from "../../../../../../screens/loading/loading";
import ErrorMessage from "../../../../../../screens/error/error";

// eslint-disable-next-line react-refresh/only-export-components
const USER = <FontAwesomeIcon icon={faUser} />;

const nMenu = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const usersstate = useSelector(selectUserState);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const currentuser = useSelector(selectUser);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const users: any = useSelector(selectUsers);

  const profilepic = users[currentuser]?.profilepic;

  const usersarr: any[] = [];
  Object.keys(users).forEach(function (key, index) {
    usersarr[index] = [key, users[key]?.username];
  });

  const menuitems: any[] = usersarr.map((user) => (
    <MenuItem key={user} onClick={() => dispatch(setUser(user[0]))}>
      <div className="left-icon">
        {USER} {user[1]}
      </div>
    </MenuItem>
  ));

  return (
    <>
      {usersstate === "loading" ? (
        <Loading />
      ) : usersstate === "error" ? (
        <ErrorMessage message="" />
      ) : (
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar size={"sm"} src={profilepic} />
          </MenuButton>
          <MenuList>{menuitems}</MenuList>
        </Menu>
      )}
    </>
  );
};

export default nMenu;
