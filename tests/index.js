import { useInfiniteQuery, useMutation, useQuery } from 'react-query';
import { useFooInfiniteQuery, useFooMutation, useFooQuery } from './hooks/useSomething';

const wrongReactQuery = () => {
  const { data } = useQuery();
  const { isSuccess } = useMutation();
  const { dataUpdatedAt } = useInfiniteQuery();

  return { data, isSuccess, dataUpdatedAt };
};

const correctQuery = () => {
  const { data } = useFooQuery();
  const { isSuccess } = useFooMutation();
  const { dataUpdatedAt } = useFooInfiniteQuery();
  return { data, isSuccess, dataUpdatedAt };
};

wrongReactQuery();
correctQuery();
