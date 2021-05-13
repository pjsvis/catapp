import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { appConfig } from '../services/app-config';
import { Cat, VotePost } from '../services/cat-types';
import { postVoteApi, Vote } from '../services/cat-api';
import { getMyVotes } from '../services/get-counts';

interface Props {
  cat: Cat;
  votes: Vote[];
}
export function VoteDown({ cat, votes }: Props) {
  const queryClient = useQueryClient();
  const voteCat = useMutation((votePost: VotePost) => postVoteApi(votePost), {
    onSuccess: () => {
      queryClient.invalidateQueries('votes');
    },
  });

  // If no votes then cannot vote down
  const myVotes = getMyVotes(cat.id, votes, appConfig.subId);
  if (myVotes.length === 0) {
    return null;
  }

  return (
    <>
      <span
        className="fa-stack pointer grow shadow-4 br-100 mr2"
        onClick={() => voteCat.mutate({ image_id: cat.id, value: 0, sub_id: appConfig.subId })}
        title="Vote this cat down"
      >
        {voteCat.isLoading ? (
          <i className="fa fa-spinner fa-spin fa-stack-1x fa-inverse"></i>
        ) : (
          <>
            <i className="fa fa-circle fa-stack-2x red"></i>
            <i className="fa fa-thumbs-down fa-stack-1x fa-inverse"></i>
          </>
        )}
      </span>
    </>
  );
}
