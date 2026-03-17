import useGenre from "@/hooks/UseGenre";
import React from "react";

const GenreList = () => {
  const { genres } = useGenre();
  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
