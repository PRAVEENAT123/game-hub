import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCart from "./GameCart";

const GameGrid = () => {
  const { games, errorMsg } = useGames();
  return (
    <>
      {errorMsg && <Text>{errorMsg}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="10px"
        gap={10}
      >
        {games.map((game) => (
          <GameCart key={game.id} game={game}></GameCart>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
