import { Platform } from "@/hooks/useGames";
import usePlatforms from "@/hooks/usePlatFortms";
import { HStack, Menu, Text } from "@chakra-ui/react";
import { Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, errorMsg } = usePlatforms();
  if (errorMsg) return null;
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          <HStack>
            <Text>{selectedPlatform?.name || "PlatForms"} </Text>
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
              <Menu.Item
                onClick={() => onSelectPlatform(platforms)}
                key={platforms.id}
                value="new-txt"
              >
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
