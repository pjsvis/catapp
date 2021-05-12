import axios from 'axios';
import { appConfig } from './app-config';
import { Cat } from './cat';

axios.defaults.baseURL = appConfig.baseUrl;
axios.defaults.headers.common['x-api-key'] = appConfig.xApiKey;

type IncludeOption = 0 | 1;

export interface GetCatQuery {
  page?: number;
  limit?: number;
  include_vote?: IncludeOption;
  include_favourite?: IncludeOption;
}

// get an array of cat images
export const getCats = async ({
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

// 204 => success
export const deleteCat = async (imageId: string): Promise<string | null> => {
  const { data } = await axios.delete(`/images/${imageId}`);
  return data;
};
