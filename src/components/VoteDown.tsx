import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { appConfig } from '../services/app-config';
import { Cat, VotePost } from '../services/cat';
import { voteCatApi } from '../services/cat-api';

interface Props {
  cat: Cat;
}
export function VoteDown({ cat }: Props) {
  const queryClient = useQueryClient();
  const voteCat = useMutation((votePost: VotePost) => voteCatApi(votePost), {
    onSuccess: () => {
      queryClient.invalidateQueries('cats');
    },
  });
  return (
    <>
      <span
        className="fa-stack pointer grow shadow-4 br-100"
        onClick={() => voteCat.mutate({ image_id: cat.id, value: 0, sub_id: appConfig.subId })}
        title="Vote this cat down"
      >
        <i className="fa fa-circle fa-stack-2x red"></i>
        <i className="fa fa-thumbs-down fa-stack-1x fa-inverse"></i>
      </span>
    </>
  );
}
