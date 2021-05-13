import React from 'react';
import { Cat } from '../services/cat-types';
import { Favourite, Vote } from '../services/cat-api';
import { getTotalFavouritesCount, getTotalVotes } from '../services/get-counts';

interface Props {
  cat: Cat;
  votes: Vote[];
  favourites: Favourite[];
}
export function VotesAndFavourites({ cat, votes, favourites }: Props) {
  return (
    <>
      <div className="flex">
        <div className="black-60 f7">
          <i className="fa fa-thumbs-up green mr1"></i>
          <span>{getTotalVotes(cat.id, votes)}</span>
        </div>
        <div className="ml2 black-60 f7">
          <i className="fa fa-heart green mr1"></i>
          <span>{getTotalFavouritesCount(cat.id, favourites)}</span>
        </div>
      </div>
    </>
  );
}
