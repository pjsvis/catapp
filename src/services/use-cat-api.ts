import { useQuery } from 'react-query';
import { Cat } from './cat';
import { GetCatQuery, getCats } from './cat-api';

export const useCats = (query: GetCatQuery) => {
  return useQuery<Cat[], Error>(['cats', query], () => getCats(query));
};
