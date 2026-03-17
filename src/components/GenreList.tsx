import useData from "@/hooks/useData";
import useGenre, { Genre } from "@/hooks/UseGenre";
import React from "react";

const GenreList = () => {
  const { data } = useData<Genre>("/genres");

  return (
    <>
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
