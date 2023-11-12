import { Avatar, VStack } from "@chakra-ui/react";

interface IParmasType {
  profilepics: any;
}

const Sharewith: React.FC<IParmasType> = ({ profilepics = [] }) => {
  const avatars = profilepics.map((pic: any) => (
    <Avatar key={pic} size="lg" name="Kent Dodds" src={pic} />
  ));
  return (
    <VStack spacing={4} align="stretch">
      <h2>Shared with:</h2>
      {avatars}
    </VStack>
  );
};

export default Sharewith;
