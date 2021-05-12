import React from 'react';
import { Cat } from '../services/cat';
import { CatCard } from './CatCard';

type Props = {
  cats: Cat[];
};

export function CatCardList({ cats }: Props) {
  return (
    <>
      <div className="content mt1">
        <div className="grid-container">
          {cats.map((cat) => (
            <div key={cat.id}>
              <CatCard key={cat.id} cat={cat} />
            </div>
          ))}
        </div>
      </div>
      <div>
        <pre>{JSON.stringify(cats[0], null, 0)}</pre>
      </div>
    </>
  );
}
