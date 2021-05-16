import React from 'react';
import { appConfig } from '../services/app-config';
import { Cat } from '../services/cat-types';
import { Favourite, Vote } from '../services/cat-api';
import { useGetImages, useGetFavourites } from '../services/use-cat-api';
import { useGetVotes } from '../services/use-cat-api';
import { CatCardList } from './CatCardList';
import { ResetAll } from './ResetAll';

export function Home() {
  const {
    isLoading: isLoadingImages,
    error: errorImages,
    data: dataImages,
  }: { isLoading: boolean; error: Error | null; data: Cat[] | undefined } = useGetImages({
    page: 0,
    limit: 100,
    sub_id: appConfig.subId,
  });

  const {
    isLoading: isLoadingVotes,
    error: errorVotes,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data: dataVotes,
  }: { isLoading: boolean; error: Error | null; data: Vote[] | undefined } = useGetVotes({
    sub_id: appConfig.subId,
    page: 0,
    limit: 100,
  });

  const {
    isLoading: isLoadingFavourites,
    error: errorFavourites,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    data: dataFavourites,
  }: { isLoading: boolean; error: Error | null; data: Favourite[] | undefined } = useGetFavourites({
    sub_id: appConfig.subId,
    page: 0,
    limit: 100,
  });

  return (
    <>
      <div className="bg-black-10 w-100 ph3 pv1 pv1-ns ph4-m ph5-l">
        <div className="mr1">
          <ResetAll images={dataImages || []} votes={dataVotes || []} favourites={dataFavourites || []} />
        </div>
      </div>
      <div className="ma4">
        {!dataImages || (dataImages && dataImages.length === 0) ? (
          <div className="ba b--black-10 shadow-5 pa4 center fit-w">No cat images have been uploaded yet.</div>
        ) : null}
        <div>
          <CatCardList cats={dataImages || []} votes={dataVotes || []} favourites={dataFavourites || []} />
        </div>
      </div>
      <div>
        {errorImages ? (
          <div>
            <pre>{JSON.stringify(errorImages, null, 2)}</pre>
          </div>
        ) : null}
      </div>
      <div>{isLoadingImages ? <i className="fa fas-spinner" /> : null}</div>
      <div>{errorImages ? <span>An error occurred loading the cat images: {errorImages.message}</span> : null}</div>

      <div>{isLoadingVotes ? <i className="fa fas-spinner" /> : null}</div>
      <div>{errorVotes ? <span>An error occurred loading the cat votes: {errorVotes.message}</span> : null}</div>

      <div>{isLoadingFavourites ? <i className="fa fas-spinner" /> : null}</div>
      <div>
        {errorFavourites ? <span>An error occurred loading the cat favourites: {errorFavourites.message}</span> : null}
      </div>
    </>
  );
}
