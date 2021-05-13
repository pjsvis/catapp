import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { Cat } from '../services/cat';
import { deleteCatApi } from '../services/cat-api';

interface Props {
  cat: Cat;
}
export function ImageDelete({ cat }: Props) {
  const queryClient = useQueryClient();
  const deleteCat = useMutation((imageId: string) => deleteCatApi(imageId), {
    onSuccess: () => {
      queryClient.invalidateQueries('cats');
    },
  });
  return (
    <>
      <span
        className="fa-stack pointer grow shadow-4 br-100"
        onClick={() => deleteCat.mutate(cat.id)}
        title="Delete this cat"
      >
        <i className="fa fa-circle fa-stack-2x red"></i>
        <i className="fa fa-trash fa-stack-1x fa-inverse"></i>
      </span>
    </>
  );
}
