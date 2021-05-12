import React from 'react';
import { Cat } from '../services/cat';
import { appConfig } from '../services/app-config';
import { LikeAdd } from './LikeAdd';
import { LikeRemove } from './LikeRemove';
import { VoteDown } from './VoteDown';
import { VoteUp } from './VoteUp';

interface Props {
  cat: Cat;
}

// NOTE: .grid-container div width is 150 in tachyons-ext.css
// NOTE: We set the image width to 150px
// NOTE: and adjust the image height by 150 / imageWidth
const catWidth = appConfig.imageSize;

export function CatCard({ cat }: Props) {
  const voteUp = (id: string) => {
    console.log('Vote Up: ' + id);
  };

  const voteDown = (id: string) => {
    console.log('Vote Down: ' + id);
  };

  const likeAdd = (id: string) => {
    console.log('Add like: ' + id);
  };

  const likeRemove = (id: string) => {
    console.log('Remove like: ' + id);
  };
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
                <VoteDown onClick={() => voteDown(cat.id)} />
              </span>
              <span className="ml2">
                <LikeRemove onClick={() => likeRemove(cat.id)} />
              </span>
            </span>
            <span className="tc">{cat.id}</span>
            <span className="fr">
              <span>
                <VoteUp onClick={() => voteUp(cat.id)} />
              </span>
              <span className="ml2">
                <LikeAdd onClick={() => likeAdd(cat.id)} />
              </span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
