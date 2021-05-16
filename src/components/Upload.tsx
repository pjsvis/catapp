import React from 'react';
import { CatDropzone } from './CatDropzone';

export function Upload() {
  return (
    <>
      <div className="ma4 center w-50 sans-serif">
        <div>
          <CatDropzone />
        </div>
      </div>
    </>
  );
}
