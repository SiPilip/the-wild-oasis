import { useQuery } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabin";

export default function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return { isLoading, cabins, error };
}
