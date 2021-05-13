import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { appConfig } from '../services/app-config';
import { Cat } from '../services/cat';
import { favouriteCatApi, FavouritePost } from '../services/cat-api';

interface Props {
  cat: Cat;
}
export function LikeAdd({ cat }: Props) {
  const queryClient = useQueryClient();
  const favouriteCat = useMutation((favouritePost: FavouritePost) => favouriteCatApi(favouritePost), {
    onSuccess: () => {
      queryClient.invalidateQueries('cats');
    },
  });
  return (
    <>
      <span
        className="fa-stack pointer grow shadow-4 br-100"
        onClick={() => favouriteCat.mutate({ image_id: cat.id, sub_id: appConfig.subId })}
        title="Add a like for this cat"
      >
        <i className="fa fa-circle fa-stack-2x green"></i>
        <i className="fa fa-heart fa-stack-1x fa-inverse"></i>
      </span>
    </>
  );
}
