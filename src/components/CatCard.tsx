import React from 'react';
import { Cat } from '../services/cat';
import { appConfig } from '../services/app-config';
import { LikeAdd } from './LikeAdd';
import { VoteDown } from './VoteDown';
import { VoteUp } from './VoteUp';
import { ImageDelete } from './ImageDelete';
import { LikeRemove } from './LikeRemove';

interface Props {
  cat: Cat;
}

// NOTE: .grid-container div width is 150 in tachyons-ext.css
// NOTE: We set the image width to 150px
// TODO: Find all refs to 150
const catWidth = appConfig.imageSize;

export function CatCard({ cat }: Props) {
  return (
    <>
      <div className="cat-card">
        <div className="cat-div">
          <img className="cat-image" src={cat.url} alt={cat.url} width={catWidth} height="auto" />
        </div>
        <div>
          <span>
            <span className="fl">
              <span>
                <VoteDown cat={cat} />
              </span>
              <span className="ml2">
                <LikeRemove cat={cat} />
              </span>
              <span className="ml2">
                <ImageDelete cat={cat} />
              </span>
            </span>
            <span className="fr">
              <span>
                <VoteUp cat={cat} />
              </span>
              <span className="ml2">
                <LikeAdd cat={cat} />
              </span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
