import { useInfiniteQuery, useMutation, useQuery } from 'react-query';

const getSomething = () => {
  return console.log('fetch something');
};

const setSomething = async () => {
  console.log('do nothing');
};

const fetchPage = (pageParam) => {
  return pageParam;
};

const useFooQuery = () => {
  return useQuery(['fooQueryKey'], () => getSomething());
};

const useFooMutation = () => {
  return useMutation(['fooMutationKey'], () => setSomething());
};

const useFooInfiniteQuery = () => {
  return useInfiniteQuery(['fooInfiniteQueryKey'], ({ pageParam = 1 }) => fetchPage(pageParam));
};

export { useFooQuery, useFooMutation, useFooInfiniteQuery };
