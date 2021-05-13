import { useQuery } from 'react-query';
import { Cat } from './cat-types';
import {
  Favourite,
  GetImagesQuery,
  getImagesApi,
  getFavouritesApi,
  GetFavouritesQuery,
  getVotesApi,
  GetVotesQuery,
  Vote,
} from './cat-api';

export type QueryType = 'cats' | 'votes' | 'favourites';

export const useGetImages = (query: GetImagesQuery) => {
  return useQuery<Cat[], Error>(['cats', query], () => getImagesApi(query));
};

export const useGetVotes = (query: GetVotesQuery) => {
  return useQuery<Vote[], Error>(['votes', query], () => getVotesApi(query));
};

export const useGetFavourites = (query: GetFavouritesQuery) => {
  return useQuery<Favourite[], Error>(['favourites', query], () => getFavouritesApi(query));
};
