import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

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
        Aside
      </GridItem>

      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default Demo;
