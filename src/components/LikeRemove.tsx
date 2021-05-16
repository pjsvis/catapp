import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Cat } from '../services/cat-types';
import { deleteFavouriteApi, Favourite } from '../services/cat-api';
import { appConfig } from '../services/app-config';
import { getMyFavourites } from '../services/get-counts';

interface Props {
  cat: Cat;
  favourites: Favourite[];
}
export function LikeRemove({ cat, favourites }: Props) {
  const queryClient = useQueryClient();
  const likeRemove = useMutation((favouriteId: number) => deleteFavouriteApi(favouriteId), {
    onSuccess: () => {
      queryClient.invalidateQueries('favourites');
    },
  });

  const handleLikeRemove = (cat: Cat) => {
    const myFavourites = getMyFavourites(cat.id, favourites, appConfig.subId);
    myFavourites.forEach((fav) => likeRemove.mutate(fav.id));
  };

  // If no favourites then hide
  const myFavourites = getMyFavourites(cat.id, favourites, appConfig.subId);
  if (myFavourites.length === 0) {
    return null;
  }

  return (
    <>
      <span
        className="fa-stack pointer grow shadow-4 br-100 mr2"
        onClick={() => handleLikeRemove(cat)}
        title="Remove the like for this cat"
      >
        {likeRemove.isLoading ? (
          <i className="fa fa-spinner fa-spin fa-stack-1x fa-inverse"></i>
        ) : (
          <>
            <i className="fa fa-heart fa-stack-1x green"></i>
            <i className="fa fa-ban fa-stack-2x light-red"></i>
          </>
        )}
      </span>
    </>
  );
}
