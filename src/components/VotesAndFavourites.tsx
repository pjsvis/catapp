import React from 'react';
import { Cat } from '../services/cat-types';
import { Favourite, Vote } from '../services/cat-api';
import { getAllFavourites, getAllVotes } from '../services/get-counts';

interface Props {
  cat: Cat;
  votes: Vote[];
  favourites: Favourite[];
}
export function VotesAndFavourites({ cat, votes, favourites }: Props) {
  return (
    <>
      <div className="flex">
        <div className="black-60 f7" title="Total votes">
          <i className="fa fa-thumbs-up green mr1"></i>
          <span>{getAllVotes(cat.id, votes).length}</span>
        </div>
        <div className="ml2 black-60 f7" title="Total likes">
          <i className="fa fa-heart green mr1"></i>
          <span>{getAllFavourites(cat.id, favourites).length}</span>
        </div>
      </div>
    </>
  );
}
