import React from 'react';
import { useQueryClient } from 'react-query';
import { Cat, VotePost } from '../services/cat';
import { appConfig } from '../services/app-config';
import { LikeAdd } from './LikeAdd';
// import { LikeRemove } from './LikeRemove';
import { VoteDown } from './VoteDown';
import { VoteUp } from './VoteUp';
import { ImageDelete } from './ImageDelete';
import { useMutation } from 'react-query';
import { deleteCatApi, favouriteCatApi, FavouritePost, voteCatApi } from '../services/cat-api';

interface Props {
  cat: Cat;
}

// NOTE: .grid-container div width is 150 in tachyons-ext.css
// NOTE: We set the image width to 150px
// TODO: Find all refs to 150
const catWidth = appConfig.imageSize;

export function CatCard({ cat }: Props) {
  // TODO: Invalidate cach if delete succeeds
  // TODO: Add modal to confirm delete
  const queryClient = useQueryClient();
  const deleteCat = useMutation((imageId: string) => deleteCatApi(imageId), {
    onSuccess: () => {
      queryClient.invalidateQueries('cats');
    },
  });
  const voteCat = useMutation((votePost: VotePost) => voteCatApi(votePost));
  const favouriteCat = useMutation((favouritePost: FavouritePost) => favouriteCatApi(favouritePost));

  return (
    <>
      <div className="cat-card">
        <div className="cat-div">
          <img className="cat-image" src={cat.url} alt={cat.url} width={catWidth} height="auto" />
        </div>
        <div>
          <span>
            <span className="fl">
              <span>
                <VoteDown onClick={() => voteCat.mutate({ image_id: cat.id, value: 0 })} />
              </span>
              <span className="ml2">{/* <LikeRemove onClick={() => likeRemove(cat.id)} /> */}</span>
              <span className="ml2">
                <ImageDelete onClick={() => deleteCat.mutate(cat.id)} />
              </span>
            </span>
            <span className="tc">{cat.id}</span>
            <span className="fr">
              <span>
                <VoteUp onClick={() => voteCat.mutate({ image_id: cat.id, value: 1 })} />
              </span>
              <span className="ml2">
                <LikeAdd onClick={() => favouriteCat.mutate({ image_id: cat.id })} />
              </span>
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
