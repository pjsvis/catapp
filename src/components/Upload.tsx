import React from 'react';
import { CatDropzone } from './CatDropzone';

export function Upload() {
  return (
    <>
      <div className="ma4 sans-serif">Upload</div>
      <div>
        <CatDropzone />
      </div>
    </>
  );
}
