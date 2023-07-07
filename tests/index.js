import { useQuery } from "react-query";
import useSomething from "./hooks/useSomething";

const wrongQuery = () => {
  const {data} = useQuery();
  return data;
}

const correctQuery = () => {
  const {data} = useSomething();
  return data;
}

wrongQuery();
correctQuery();