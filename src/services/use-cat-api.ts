import { useMutation, useQuery } from 'react-query';
import { Cat, VotePost } from './cat';
import {
  Favourite,
  favouriteCatApi,
  FavouritePost,
  GetCatQuery,
  getCatsApi,
  getFavouritesApi,
  GetFavouritesReq,
  getVotesApi,
  GetVotesReq,
  Vote,
  voteCatApi,
} from './cat-api';

export const useGetCats = (query: GetCatQuery) => {
  return useQuery<Cat[], Error>(['cats', query], () => getCatsApi(query));
};

export const useGetVotes = (query: GetVotesReq) => {
  return useQuery<Vote[], Error>(['votes', query], () => getVotesApi(query));
};

export const useGetFavourites = (query: GetFavouritesReq) => {
  return useQuery<Favourite[], Error>(['favourites', query], () => getFavouritesApi(query));
};

export const useVoteCat = (votePost: VotePost) => {
  return useMutation(() => voteCatApi(votePost));
};

export const useFavouriteCat = (favouritePost: FavouritePost) => {
  return useMutation(() => favouriteCatApi(favouritePost));
};

// useDeleteVote
// useGetVotes
