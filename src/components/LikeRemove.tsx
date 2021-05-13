import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Cat } from '../services/cat';
import { deleteFavouriteApi } from '../services/cat-api';

interface Props {
  cat: Cat;
}
export function LikeRemove({ cat }: Props) {
  const queryClient = useQueryClient();
  const likeRemove = useMutation((favouriteId: string) => deleteFavouriteApi(favouriteId), {
    onSuccess: () => {
      queryClient.invalidateQueries('cats');
    },
  });

  const handleLikeRemove = (cat: Cat) => {
    // TODO: Find favouriteId from cat
    if (!cat) {
      return;
    }
    const favouriteId = 'XXX';
    likeRemove.mutate(favouriteId);
  };

  return (
    <>
      <span
        className="fa-stack pointer grow shadow-4 br-100"
        onClick={() => handleLikeRemove(cat)}
        title="Remove the like for this cat"
      >
        <i className="fa fa-heart fa-stack-1x green"></i>
        <i className="fa fa-ban fa-stack-2x light-red"></i>
      </span>
    </>
  );
}
