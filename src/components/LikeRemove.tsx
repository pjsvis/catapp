import React from 'react';

interface Props {
  onClick: () => void;
}
export function LikeRemove({ onClick }: Props) {
  return (
    <>
      <span className="fa-stack pointer grow shadow-4 br-100" onClick={onClick} title="Remove the like for this cat">
        <i className="fa fa-heart fa-stack-1x green"></i>
        <i className="fa fa-ban fa-stack-2x light-red"></i>
      </span>
    </>
  );
}
