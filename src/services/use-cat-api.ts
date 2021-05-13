import { useMutation, useQuery } from 'react-query';
import { Cat, VotePost } from './cat';
import { favouriteCatApi, FavouritePost, GetCatQuery, getCatsApi, voteCatApi } from './cat-api';

export const useGetCats = (query: GetCatQuery) => {
  return useQuery<Cat[], Error>(['cats', query], () => getCatsApi(query));
};

export const useVoteCat = (votePost: VotePost) => {
  return useMutation(() => voteCatApi(votePost));
};

// useGetVotes
// useDeleteVote

export const useFavouriteCat = (favouritePost: FavouritePost) => {
  return useMutation(() => favouriteCatApi(favouritePost));
};
