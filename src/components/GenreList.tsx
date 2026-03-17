import useData from "@/hooks/useData";
import useGenre, { Genre } from "@/hooks/UseGenre";
import getCroppedImageURL from "@/services/iamge-url";
import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { textStyles } from "@chakra-ui/react/theme";
import React from "react";

const GenreList = () => {
  const { data, isLoading, errorMsg } = useGenre();
  if (errorMsg) return null;
  if (isLoading) return <Spinner></Spinner>;
  return (
    <>
      <List.Root>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="7px">
            <HStack>
              <Image
                boxSize="30px"
                borderRadius={8}
                src={getCroppedImageURL(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
