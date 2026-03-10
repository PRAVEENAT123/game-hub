import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../assets/react.svg";
import { ColorModeButton } from "./ui/color-mode";

const NavBar = () => {
  return (
    <HStack>
      <Image src={Logo}></Image>
      <Text> Navbar</Text>
      <ColorModeButton></ColorModeButton>
    </HStack>
  );
};

export default NavBar;
