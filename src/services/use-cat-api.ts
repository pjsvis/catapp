import { useQuery } from 'react-query';
import { Cat } from './cat';
import {
  Favourite,
  GetCatQuery as GetImagesQuery,
  getImagesApi,
  getFavouritesApi,
  GetFavouritesReq as GetFavouritesQuery,
  getVotesApi,
  GetVotesQuery as GetVotesQuery,
  Vote,
} from './cat-api';

export const useGetImages = (query: GetImagesQuery) => {
  return useQuery<Cat[], Error>(['cats', query], () => getImagesApi(query));
};

export const useGetVotes = (query: GetVotesQuery) => {
  return useQuery<Vote[], Error>(['votes', query], () => getVotesApi(query));
};

export const useGetFavourites = (query: GetFavouritesQuery) => {
  return useQuery<Favourite[], Error>(['favourites', query], () => getFavouritesApi(query));
};
