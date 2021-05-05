import React from 'react';
import { Cat } from '../services/cat';
import { CatCard } from './CatCard';
import { LikeAdd } from './LikeAdd';
import { LikeRemove } from './LikeRemove';
import { VoteDown } from './VoteDown';
import { VoteUp } from './VoteUp';

type Props = {
  cats: Cat[];
};

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
export function CatCardList({ cats }: Props) {
  return (
    <div className="content mt1">
      <div className="grid-container">
        {cats.map((cat) => (
          <div key={cat.id}>
            <CatCard key={cat.id} cat={cat} />
            <span className="pt2">
              <span className="fl">
                <span>
                  <VoteDown onClick={() => voteDown(cat.id)} />
                </span>
                <span className="ml2">
                  <LikeRemove onClick={() => likeRemove(cat.id)} />
                </span>
              </span>
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
        ))}
      </div>
    </div>
  );
}
