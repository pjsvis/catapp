import React from 'react';
import ReactMarkdown from 'react-markdown';

const aboutText = `
# About CAT APP

## Introduction

The app was create as a programming exercise for Waracle. The requirement was to create an app that talks to [The Cat API](https://thecatapi.com/). 

## API Issues

- The api serves up three data sets: images, votes, and favourites
- The documentation notes that the votes and favourites can be included in the images dataset but this does not appear to work.
- The delete vote reports success but does not always delete vote
`;

export function About() {
  return (
    <>
      <div className="ba b--black-10 pa4  w-50 center ma4 sans-serif black-90 f6 shadow-5">
        <ReactMarkdown linkTarget="_blank">{aboutText}</ReactMarkdown>
      </div>
    </>
  );
}
