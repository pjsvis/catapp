import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { appConfig } from '../services/app-config';
import { Cat, VotePost } from '../services/cat';
import { voteCatApi } from '../services/cat-api';

interface Props {
  cat: Cat;
}
export function VoteUp({ cat }: Props) {
  const queryClient = useQueryClient();
  const votePost: VotePost = { image_id: cat.id, value: 1, sub_id: appConfig.subId };
  const voteCat = useMutation(() => voteCatApi(votePost), {
    onSuccess: () => {
      queryClient.invalidateQueries('cats');
    },
  });
  return (
    <>
      <span className="fa-stack pointer grow shadow-4 br-100" onClick={() => voteCat.mutate()} title="Vote this cat up">
        <i className="fa fa-circle fa-stack-2x green"></i>
        <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
      </span>
    </>
  );
}
