import usePlatforms from "@/hooks/usePlatFortms";
import { HStack, Menu, Text } from "@chakra-ui/react";
import { Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const PlatformSelector = () => {
  const { data } = usePlatforms();
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          <HStack>
            <Text>Platforms </Text>
            <Text>
              <BsChevronDown />
            </Text>
          </HStack>
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {data.map((platforms) => (
              <Menu.Item key={platforms.id} value="new-txt">
                {platforms.name}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default PlatformSelector;
