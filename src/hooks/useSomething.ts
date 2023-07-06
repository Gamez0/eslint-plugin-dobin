import { useQuery } from "react-query";

const getSomething = () => {
  return console.log('fetch something');
}

const useSomething = () => {
  return useQuery(['someKey', () => getSomething()]);
}

export default useSomething;
