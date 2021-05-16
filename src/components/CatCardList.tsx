import React from 'react';
import { Favourite, Vote } from '../services/cat-api';
import { Cat } from '../services/cat-types';
import { CatCard } from './CatCard';

type Props = {
  cats: Cat[];
  votes: Vote[];
  favourites: Favourite[];
};

export function CatCardList({ cats, votes, favourites }: Props) {
  return (
    <>
      <div className="content mt1  ">
        <div className="grid-container">
          {cats.map((cat) => (
            <div key={cat.id}>
              <CatCard key={cat.id} cat={cat} votes={votes} favourites={favourites} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
