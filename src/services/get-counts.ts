import { Favourite, Vote } from './cat-api';

export const getAllVotes = (imageId: string, votes: Vote[]) => {
  return votes.filter((x) => x.image_id === imageId);
};

export const getMyVotes = (imageId: string, votes: Vote[], subId: string) => {
  return votes.filter((x) => x.image_id === imageId && x.sub_id === subId);
};

export const getAllFavourites = (imageId: string, favourites: Favourite[]) => {
  return favourites.filter((x) => x.image_id === imageId);
};

export const getMyFavourites = (imageId: string, favourites: Favourite[], subId: string) => {
  return favourites.filter((x) => x.image_id === imageId && x.sub_id === subId);
};
