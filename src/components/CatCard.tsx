import React from 'react';
import { Cat } from '../services/cat';

interface Props {
  cat: Cat;
}

// NOTE: .grid-container div width is 150 in tachyons-ext.css
const getHeight = (cat: Cat) => {
  return cat.height * (150 / cat.width);
};

export function CatCard({ cat }: Props) {
  return (
    <>
      <img src={cat.url} className="" alt={cat.url} width={cat.width} height={getHeight(cat)} />
    </>
  );
}
