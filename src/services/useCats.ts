import { useQuery } from 'react-query';
import axios from 'axios';
import { Cat } from './cat';

const queryUrl = 'https://api.thecatapi.com/v1/images/search?limit=100';

const query = {
  query: {},
  options: {
    pagination: false,
  },
  headers: {
    'x-api-key': 'a727925c-68b0-4a92-b790-e355b2c28c9c',
  },
};

const getCats = async () => {
  const { data } = await axios.post(queryUrl, query);
  return data;
};

export const useCats = () => {
  return useQuery<Cat[], Error>('cats', getCats);
};
