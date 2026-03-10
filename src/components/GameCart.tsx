import { FeatchGamesResponce, Game } from "@/hooks/useGames";
import { Card, Image } from "@chakra-ui/react";
import React from "react";

interface Props {
  game: Game;
}
const GameCart = ({ game }: Props) => {
  return (
    <Card.Root overflow="hidden" borderRadius={10}>
      <Image src={game.background_image}></Image>
      <Card.Body>
        <Card.Title>{game.name}</Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCart;
