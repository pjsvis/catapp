import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { appConfig } from '../services/app-config';
import { Cat } from '../services/cat-types';
import { postFavouriteApi, FavouritePost, Favourite } from '../services/cat-api';
import { getMyFavourites } from '../services/get-counts';

interface Props {
  cat: Cat;
  favourites: Favourite[];
}
export function LikeAdd({ cat, favourites }: Props) {
  const queryClient = useQueryClient();
  const favouritePost: FavouritePost = { image_id: cat.id, sub_id: appConfig.subId };
  const favouriteCat = useMutation(() => postFavouriteApi(favouritePost), {
    onSuccess: () => {
      queryClient.invalidateQueries('favourites');
    },
  });

  // If existing like then do not show
  const myFavourites = getMyFavourites(cat.id, favourites, appConfig.subId);
  if (myFavourites.length > 0) {
    return null;
  }

  return (
    <>
      <span
        className="fa-stack pointer grow shadow-4 br-100 mr2"
        onClick={() => favouriteCat.mutate()}
        title="Add a like for this cat"
      >
        <i className="fa fa-circle fa-stack-2x green"></i>
        {favouriteCat.isLoading ? (
          <i className="fa fa-spinner fa-spin fa-stack-1x fa-inverse"></i>
        ) : (
          <i className="fa fa-heart fa-stack-1x fa-inverse"></i>
        )}
      </span>
    </>
  );
}
