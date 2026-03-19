import { Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/gaming_logo.svg";
import { ColorModeButton } from "./ui/color-mode";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={Logo}></Image>
      <SearchInput onSearch={onSearch} />
      <ColorModeButton />
      <Text whiteSpace={"nowrap"}>Dark Mode</Text>
    </HStack>
  );
};

export default NavBar;
