import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deleteImageApi, deleteVoteApi, Favourite, Vote } from '../services/cat-api';
import { Cat } from '../services/cat-types';

interface Props {
  images: Cat[];
  votes: Vote[];
  favourites: Favourite[];
}
export function ResetAll({ images, votes, favourites }: Props) {
  const queryClient = useQueryClient();

  const deleteCat = useMutation((imageId: string) => deleteImageApi(imageId));

  const deleteVote = useMutation((voteId: number) => deleteVoteApi(voteId));

  const deleteFavourite = useMutation((favouriteId: number) => deleteVoteApi(favouriteId));

  const deleteAll = async (images: Cat[], votes: Vote[], favourites: Favourite[]) => {
    await favourites.forEach((favourite) => {
      setTimeout(() => {
        deleteFavourite.mutate(favourite.id);
      }, 100);
    });
    await queryClient.invalidateQueries('favourites');
    await votes.forEach((vote) => {
      setTimeout(() => {
        deleteVote.mutate(vote.id);
      }, 100);
    });
    await queryClient.invalidateQueries('votes');
    await images.forEach((image) => deleteCat.mutate(image.id));

    await queryClient.invalidateQueries('cats');
  };

  return (
    <>
      <span
        className="fa-stack pointer grow shadow-4 br-100"
        onClick={() => deleteAll(images, votes, favourites)}
        title="Delete all cat images, favourites, and votes"
      >
        <i className="fa fa-circle fa-stack-2x red"></i>
        <i className="fa fa-trash fa-stack-1x fa-inverse"></i>
      </span>
      {deleteCat.isLoading || deleteVote.isLoading || deleteFavourite.isLoading ? (
        <span>Resetting all cats, votes, and favourites...</span>
      ) : null}
    </>
  );
}
