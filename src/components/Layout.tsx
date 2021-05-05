import React from 'react';
import { CatCard } from './CatCard';
import { CatDropzone } from './CatDropzone';

export function Layout() {
  return (
    <>
      <div className="ma4 sans-serif">
        <div className="ma2">Hello Layout</div>
        <div className="ma2">Upload cat images</div>
        <div className="ma2">View cat images</div>
        <div className="ma2">Favourite/Unfavourite cat images</div>
        <div className="ma2">Vote up//dn cat images</div>
        <div className="ma2">View Scores for images</div>
        <CatCard isCat={true}></CatCard>
        <CatDropzone></CatDropzone>
      </div>
    </>
  );
}
