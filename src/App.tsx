import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/UseGenre";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

const Demo = () => {
  const [selectedGenre, setSelecdGenre] = useState<Genre | null>(null);
  const [selecetPlatform, setSelectedPlatfrom] = useState<Platform | null>(
    null,
  );
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "main main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "300px 1fr",
      }}
    >
      <GridItem area={"nav"} margin={2}>
        <NavBar></NavBar>
      </GridItem>

      <GridItem
        area="aside"
        display={{ base: "none", lg: "block" }}
        paddingX={5}
      >
        <GenreList
          selcetedGenre={selectedGenre}
          onSeleectGenre={(genre) => setSelecdGenre(genre)}
        ></GenreList>
      </GridItem>

      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={selecetPlatform}
          onSelectPlatform={(platform) => setSelectedPlatfrom(platform)}
        />
        <GameGrid
          selectedPlatform={selecetPlatform}
          selectedGenre={selectedGenre}
        />
      </GridItem>
    </Grid>
  );
};

export default Demo;
