import React from 'react';
import { Cat } from '../services/cat';
import { useCats } from '../services/useCats';
import { CatCardList } from './CatCardList';

export function Home() {
  const { isLoading, error, data }: { isLoading: boolean; error: Error | null; data: Cat[] | undefined } = useCats();
  // const catQuery = isLoading ? [] : data;
  // const cats = !isLoading && catQuery ? catQuery : [];

  return (
    <>
      <div className="ma4">
        <div>
          <CatCardList cats={data || []} />
        </div>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      </div>
      <div>
        {error ? (
          <div>
            <pre>{JSON.stringify(error, null, 2)}</pre>
          </div>
        ) : null}
      </div>
      <div>{isLoading ? <i className="fa fas-spinner" /> : null}</div>
    </>
  );
}
