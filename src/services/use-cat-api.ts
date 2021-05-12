import { useMutation, useQuery } from 'react-query';
import { Cat, VotePost } from './cat';
import { favouriteCatApi, FavouritePost, GetCatQuery, getCats, voteCatApi } from './cat-api';

export const useGetCats = (query: GetCatQuery) => {
  return useQuery<Cat[], Error>(['cats', query], () => getCats(query));
};

export const useVoteCat = (votePost: VotePost) => {
  return useMutation(() => voteCatApi(votePost));
};

// useGetVotes
// useDeleteVote

export const useFavouriteCat = (favouritePost: FavouritePost) => {
  return useMutation(() => favouriteCatApi(favouritePost));
};
