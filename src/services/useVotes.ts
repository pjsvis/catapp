import { useQuery } from 'react-query';
import axios from 'axios';
import { Cat } from './cat';
import { appConfig } from './app-config';

const queryUrl = `${appConfig.baseUrl}/votes`;

const queryGet = {
  query: {},
  options: {
    pagination: false,
    refetchOnWindowFocus: false,
  },
  headers: {
    'x-api-key': appConfig.xApiKey,
  },
};

const getVotes = async (voteGet: VoteGet) => {
  const { data } = await axios.get(queryUrl, queryGet);
  return data;
};

interface VoteGet {
  sub_id: string;
  limit: number;
  page: number;
}

export const useGetVotes = (voteGet: VoteGet) => {
  return useQuery<VoteGet[], Error>(['votes', voteGet], () => getVotes(voteGet));
};

type VotePostType = 0 | 1;
interface VotePost {
  image_id: string;
  sub_id: string;
  value: VotePostType;
}

type VotePostResponse = {
  message: string;
  id: string;
}

const postVote = async (votePost: VotePost) => {
  const { data } = await axios.post(queryUrl, votePost);
  return data;
};

// export const usePostVote = () => {
//   return useMutation<VotePostResponse[], Error>('votes', postVote);
// };
