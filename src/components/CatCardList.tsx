import React from 'react';
import { Cat } from '../services/cat';
import { CatCard } from './CatCard';

type Props = {
  cats: Cat[];
};

export function CatCardList({ cats }: Props) {
  return (
    <>
      <div className="content mt1  animate__animated animate__fadeIn animate__delay-1s">
        <div className="grid-container">
          {cats.map((cat) => (
            <div key={cat.id}>
              <CatCard key={cat.id} cat={cat} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
