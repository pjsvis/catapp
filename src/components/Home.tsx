import React from 'react';
import { Cat } from '../services/cat';
import { useGetCats } from '../services/use-cat-api';
import { CatCardList } from './CatCardList';

export function Home() {
  const { isLoading, error, data }: { isLoading: boolean; error: Error | null; data: Cat[] | undefined } = useGetCats({
    page: 0,
    limit: 20,
  });

  return (
    <>
      <div className="ma4">
        <div>
          <CatCardList cats={data || []} />
        </div>
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
