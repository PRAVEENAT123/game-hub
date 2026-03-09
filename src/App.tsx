import { Grid, GridItem, Show } from "@chakra-ui/react";

const Demo = () => {
  return (
    <Grid
      templateAreas={{
        base: `"nav nav" "main main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area={"nav"} bg="black">
        Nav
      </GridItem>

      <GridItem area="aside" bg="red" display={{ base: "none", lg: "block" }}>
        Aside
      </GridItem>

      <GridItem area={"main"} bg="yellow">
        Main
      </GridItem>
    </Grid>
  );
};

export default Demo;
