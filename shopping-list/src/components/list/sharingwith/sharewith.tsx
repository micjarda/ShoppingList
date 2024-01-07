import { Avatar, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { selectLang } from "../../../features/slices/userSlice";

interface IParmasType {
  profilepics: any;
}

const Sharewith: React.FC<IParmasType> = ({ profilepics = [] }) => {
  const lang = useSelector(selectLang);
  const avatars = profilepics.map((pic: any) => (
    <Avatar key={pic} size="lg" name="Kent Dodds" src={pic} />
  ));
  return (
    <VStack margin={5} spacing={4} align="stretch">
      <h2>{lang === "en" ? "Shared with" : "Sdíleno s"}</h2>
      {avatars}
    </VStack>
  );
};

export default Sharewith;
