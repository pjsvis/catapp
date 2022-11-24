import axios from 'axios';
import { appConfig } from './app-config';
import { Cat } from './cat-types';
import { useQuery } from 'react-query';

axios.defaults.baseURL = appConfig.baseUrl;
axios.defaults.headers.common['x-api-key'] = appConfig.xApiKey;

type CatOptionType = 0 | 1;

export interface GetImagesQuery {
  page?: number;
  limit?: number;
  include_vote?: CatOptionType;
  include_favourite?: CatOptionType;
  sub_id?: string;
}

// Get an array of cat images
export const getImagesApi = async ({
  page = 0,
  limit = 20,
  include_vote = 1,
  include_favourite = 1,
}: GetImagesQuery): Promise<Cat[]> => {
  const { data } = await axios.get(
    `/images?page=${page}&limit=${limit}&include_vote=${include_vote}&include_favourite=${include_favourite}&order=Asc`,
  );
  return data;
};

export const getImageApi = async (imageId: string): Promise<Cat[]> => {
  const { data } = await axios.get(`/images/${imageId}`);
  return data;
};

interface Group {
  id: number;
  name: string;
}

const getGroups = (groupId: number): Promise<Group> => {
  return axios.get(`/groups/${groupId}`).then((res) => res.data);
}


export const useGroups = (groupId: number) => {
  return useQuery('groups', () => getGroups(groupId));
}


const groups = useGroups(23)
if (groups.isError) {
  console.log('Groups error', groups.error);
}
if (!groups.isSuccess) {
  console.log('No groups')
}


export const imageExistsApi = async (original_filename: string): Promise<Cat[]> => {
  const { data } = await axios.get(`/images?original_filename=${original_filename}`);
  return data;
};



// 204 => success
export const deleteImageApi = async (imageId: string) => {
  const { data } = await axios.delete(`/images/${imageId}`);
  return data;
};

export interface VotePost {
  image_id: string;
  value: number;
  sub_id: string;
}

export interface GetVotesQuery {
  sub_id?: string;
  page?: number;
  limit?: number;
}

export interface Vote {
  country_code: string;
  created_at: string;
  id: number;
  image_id: string;
  sub_id: string;
  value: number;
}

// Get an array of votes
export const getVotesApi = async ({ page = 0, limit = 20 }: GetVotesQuery): Promise<Vote[]> => {
  const { data } = await axios.get(`/votes?page=${page}&limit=${limit}&order=Asc`);
  return data;
};



export const getMyVotesApi = async ({ sub_id, page = 0, limit = 20 }: GetVotesQuery): Promise<Vote[]> => {
  const { data } = await axios.get(`/votes?page=${page}&limit=${limit}&sub_id=${sub_id}`);
  return data;
};

export const postVoteApi = async (votePost: VotePost) => {
  const { data } = await axios.post(`/votes`, votePost);
  return data;
};

export const deleteVoteApi = async (voteId: number) => {
  const { data } = await axios.delete(`/votes/${voteId}`);
  return data;
};

export interface GetFavouritesQuery {
  limit?: number;
  page?: number;
  sub_id?: string;
}

export interface Image {
  id: string;
  url: string;
}
export interface Favourite {
  created_at: string;
  id: number;
  image: Image;
  image_id: string;
  sub_id: string;
  user_id: string;
}

export const getFavouritesApi = async ({ limit = 100, page = 0 }: GetFavouritesQuery): Promise<Favourite[]> => {
  const { data } = await axios.get(`/favourites?page=${page}&limit=${limit}&order=Asc`);
  return data;
};

export const getMyFavouritesApi = async ({
  sub_id = appConfig.subId,
  limit = 100,
  page = 0,
}: GetFavouritesQuery): Promise<Favourite[]> => {
  const { data } = await axios.get(`/favourites?page=${page}&limit=${limit}&sub_id=${sub_id}`);
  return data;
};

export interface FavouritePost {
  image_id: string;
  sub_id: string;
}

export const postFavouriteApi = async (favouritePost: FavouritePost) => {
  const { data } = await axios.post(`/favourites`, favouritePost);
  return data;
};

export const deleteFavouriteApi = async (favouriteId: number) => {
  const { data } = await axios.delete(`/favourites/${favouriteId}`);
  return data;
};
