import React from 'react';

export function NavHeader() {
  return (
    <>
      <header className="sans-serif bg-black-90 w-100 ph3 pv3 pv4-ns ph4-m ph5-l">
        <nav className="f6 fw6 ttu tracked">
          <a className="link dim white dib mr3" href="/" title="Home">
            <i className="fa fa-lg fa-home mr2" />
            Home
          </a>
          <a className="link dim white dib mr3" href="/upload" title="Upload">
            <i className="fa fa-lg fa-cloud-upload mr2" />
            Upload
          </a>
          <a className="link dim white dib mr3" href="/about" title="About">
            <i className="fa fa-lg fa-question-circle mr2" />
            About
          </a>
          <div className="fr white f3">cat app</div>
        </nav>
      </header>
    </>
  );
}
