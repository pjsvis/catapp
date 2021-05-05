import React from 'react';

type CatCardProps = {
  isCat: boolean;
};

export function CatCard({ isCat }: CatCardProps) {
  return (
    <section className="tc pa3 pa5-ns shadow-5 mt4">
      <article className="hide-child relative ba b--black-20 mw5 center">
        <img src="https://tachyons.io/img/cat-720.jpg" className="db" alt="Photo of Jesse Grant" />
        <div className="pa2 bt b--black-20">
          <a className="f6 db link dark-blue hover-blue" href="#">
            Jesse Grant
          </a>
          <p className="f6 gray mv1">5 mutual friends</p>
          <a className="link tc ph3 pv1 db bg-animate bg-dark-blue hover-bg-blue white f6 br1" href="#">
            Add Friend
          </a>
        </div>
        <a
          className="child absolute top-1 right-1 ba bw1 black-40 grow no-underline br-100 w1 h1 pa2 lh-solid b"
          href="#"
        >
          ×
        </a>
      </article>
    </section>
  );
}
