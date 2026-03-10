import apiClient from "@/services/api-client";
import { Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface FeatchGamesResponce {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");
  useEffect(() => {
    apiClient
      .get<FeatchGamesResponce>("/games")
      .then((res) => setGames(res.data.results))
      .catch((error) => setErrorMsg(error.message));
  });

  return (
    <>
      {errorMsg && <Text>{errorMsg}</Text>}

      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
