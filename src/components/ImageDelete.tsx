import React from 'react';

interface Props {
  onClick: () => void;
}
export function ImageDelete({ onClick }: Props) {
  return (
    <>
      <span className="fa-stack pointer grow shadow-4 br-100" onClick={onClick} title="Delete this cat">
        <i className="fa fa-circle fa-stack-2x red"></i>
        <i className="fa fa-trash fa-stack-1x fa-inverse"></i>
      </span>
    </>
  );
}
