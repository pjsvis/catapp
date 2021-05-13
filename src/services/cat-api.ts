import axios from 'axios';
import { appConfig } from './app-config';
import { Cat } from './cat';

axios.defaults.baseURL = appConfig.baseUrl;
axios.defaults.headers.common['x-api-key'] = appConfig.xApiKey;

type CatOptionType = 0 | 1;

export interface GetCatQuery {
  page?: number;
  limit?: number;
  include_vote?: CatOptionType;
  include_favourite?: CatOptionType;
}

// Get an array of cat images
export const getCatsApi = async ({
  page = 0,
  limit = 20,
  include_vote = 1,
  include_favourite = 1,
}: GetCatQuery): Promise<Cat[]> => {
  const { data } = await axios.get(
    `/images?page=${page}&limit=${limit}&include_vote=${include_vote}&include_favourite=${include_favourite}`,
  );
  return data;
};

export const imageExistsApi = async (original_filename: string): Promise<Cat[]> => {
  const { data } = await axios.get(`/images?original_filename=${original_filename}`);
  return data;
};

// 204 => success
export const deleteCatApi = async (imageId: string) => {
  const { data } = await axios.delete(`/images/${imageId}`);
  return data;
};

export interface VotePost {
  image_id: string;
  value: number;
  sub_id: string;
}

export interface GetVotesReq {
  sub_id: string;
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
export const getVotesApi = async ({ sub_id, page = 0, limit = 20 }: GetVotesReq): Promise<Vote[]> => {
  const { data } = await axios.get(`/votes?sub_id=${sub_id}&page=${page}&limit=${limit}`);
  return data;
};

export const voteCatApi = async (votePost: VotePost) => {
  const { data } = await axios.post(`/votes`, votePost);
  return data;
};

export const deleteVoteApi = async (voteId: string) => {
  const { data } = await axios.delete(`/images/${voteId}`);
  return data;
};

export interface GetFavouritesReq {
  sub_id: string;
  limit?: number;
  page?: number;
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

export const getFavouritesApi = async ({
  sub_id = appConfig.subId,
  limit = 100,
  page = 0,
}: GetFavouritesReq): Promise<Favourite[]> => {
  const { data } = await axios.get(`/favourites?page=${page}&limit=${limit}&sub_id=${sub_id}`);
  return data;
};

export interface FavouritePost {
  image_id: string;
  sub_id: string;
}

export const favouriteCatApi = async (favouritePost: FavouritePost) => {
  const { data } = await axios.post(`/favourites`, favouritePost);
  return data;
};

export const unFavouriteCatApi = async (favouriteId: string) => {
  const { data } = await axios.delete(`/favourites/${favouriteId}`);
  return data;
};
