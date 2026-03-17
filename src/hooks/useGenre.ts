import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface Genre {
  id: number;
  name: string;
}

interface FeatchGeneraResponse {
  count: number;
  results: Genre[];
}

const useGenre = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [errorMsg, setErrorMsg] = useState("");
  const [isLoading, setLoadeing] = useState(false);

  useEffect(() => {
    setLoadeing(true);
    apiClient
      .get<FeatchGeneraResponse>("/games")
      .then((res) => {
        setGenres(res.data.results);
        setLoadeing(false);
      })
      .catch((error) => {
        setErrorMsg(error.message);
        setLoadeing(false);
      });
  }, []);

  return { genres, errorMsg, isLoading };
};

export default useGenre;
