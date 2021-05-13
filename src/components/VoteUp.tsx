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
export function VoteUp({ cat, votes }: Props) {
  const queryClient = useQueryClient();
  const votePost: VotePost = { image_id: cat.id, value: 1, sub_id: appConfig.subId };
  const voteCat = useMutation(() => postVoteApi(votePost), {
    onSuccess: () => {
      queryClient.invalidateQueries('votes');
    },
  });

  // If already voted then cannot vote again votes then cannot vote down
  const myVotes = getMyVotes(cat.id, votes, appConfig.subId);
  console.log('myVotesCount', myVotes.length);
  if (myVotes.length > 0) {
    return null;
  }

  return (
    <>
      <span
        className="fa-stack pointer grow shadow-4 br-100 mr2"
        onClick={() => voteCat.mutate()}
        title="Vote this cat up"
      >
        <i className="fa fa-circle fa-stack-2x green"></i>
        {voteCat.isLoading ? (
          <i className="fa fa-spinner fa-spin fa-stack-1x fa-inverse"></i>
        ) : (
          <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
        )}
      </span>
    </>
  );
}
