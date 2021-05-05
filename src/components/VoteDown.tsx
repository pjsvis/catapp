import React from 'react';

interface Props {
  onClick: () => void;
}
export function VoteDown({ onClick }: Props) {
  return (
    <>
      <span className="fa-stack pointer grow shadow-4 br-100" onClick={onClick} title="Vote this cat down">
        <i className="fa fa-circle fa-stack-2x red"></i>
        <i className="fa fa-thumbs-down fa-stack-1x fa-inverse"></i>
      </span>
    </>
  );
}
