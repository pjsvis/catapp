import React from 'react';
import { Cat } from '../services/cat-types';
import { appConfig } from '../services/app-config';
import { LikeAdd } from './LikeAdd';
import { VoteDown } from './VoteDown';
import { VoteUp } from './VoteUp';
import { ImageDelete } from './ImageDelete';
import { LikeRemove } from './LikeRemove';
import { VotesAndFavourites } from './VotesAndFavourites';
import { Favourite, Vote } from '../services/cat-api';
interface Props {
  cat: Cat;
  votes: Vote[];
  favourites: Favourite[];
}

// NOTE: .grid-container div width is 150 in tachyons-ext.css
// NOTE: We set the image width to 150px
// TODO: Find all refs to 150
const catWidth = appConfig.imageSize;

export function CatCard({ cat, votes, favourites }: Props) {
  return (
    <>
      <div className="cat-card">
        <div className="black-60 f6 fr">{cat.id}</div>
        <div className="fl ml2 mb1">
          <VotesAndFavourites cat={cat} votes={votes} favourites={favourites} />
        </div>
        <div className="cat-div">
          <img className="cat-image" src={cat.url} alt={cat.url} width={catWidth} height="auto" />
        </div>
        <div>
          <div className="flex fl ml2">
            <VoteDown cat={cat} votes={votes} />
            <VoteUp cat={cat} votes={votes} />
            <LikeRemove cat={cat} favourites={favourites} />
            <LikeAdd cat={cat} favourites={favourites} />
          </div>
          <div className="mr2 fr">
            <ImageDelete cat={cat} />
          </div>
        </div>
      </div>
    </>
  );
}
