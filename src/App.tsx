import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

const Demo = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "main main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} margin={2}>
        <NavBar></NavBar>
      </GridItem>

      <GridItem area="aside" display={{ base: "none", lg: "block" }}>
        <GenreList></GenreList>
      </GridItem>

      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Demo;
