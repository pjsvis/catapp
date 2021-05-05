import React from 'react';

interface Props {
  onClick: () => void;
}
export function LikeAdd({ onClick }: Props) {
  return (
    <>
      <span className="fa-stack pointer grow shadow-4 br-100" onClick={onClick} title="Add a like for this cat">
        <i className="fa fa-circle fa-stack-2x green"></i>
        <i className="fa fa-heart fa-stack-1x fa-inverse"></i>
      </span>
    </>
  );
}
