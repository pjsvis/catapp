import { Favourite, Vote } from './cat-api';

export const getTotalVotes = (imageId: string, votes: Vote[]) => {
  return votes.filter((x) => x.image_id === imageId).length;
};

export const getMyVotes = (imageId: string, votes: Vote[], subId: string) => {
  return votes.filter((x) => x.image_id === imageId && x.sub_id === subId);
};

export const getTotalFavouritesCount = (imageId: string, favourites: Favourite[]) => {
  return favourites.filter((x) => x.image_id === imageId).length;
};

export const getMyFavourites = (imageId: string, favourites: Favourite[], subId: string) => {
  return favourites.filter((x) => x.image_id === imageId && x.sub_id === subId);
};
