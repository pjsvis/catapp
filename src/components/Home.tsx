import React from 'react';
import { Cat } from '../services/cat';
import { useCats } from '../services/useCats';

export function Home() {
  const { isLoading, error, data }: { isLoading: boolean; error: Error | null; data: Cat[] | undefined } = useCats();
  const catQuery = isLoading ? [] : data;
  const cats = !isLoading && catQuery ? catQuery : [];
  return (
    <>
      <div>
        <pre>{JSON.stringify(cats, null)}</pre>
      </div>
      <div>{error ? <div>{error}</div> : null}</div>
      <div>{isLoading ? <i className="fa fas-spinner" /> : null}</div>
    </>
  );
}
