import React from 'react';

interface Props {
  onClick: () => void;
}
export function VoteUp({ onClick }: Props) {
  return (
    <>
      <span className="fa-stack pointer grow shadow-4 br-100" onClick={onClick} title="Vote this cat up">
        <i className="fa fa-circle fa-stack-2x green"></i>
        <i className="fa fa-thumbs-up fa-stack-1x fa-inverse"></i>
      </span>
    </>
  );
}
