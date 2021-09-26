// import external dependencies
import React from 'react';

// import internal dependencies
import Seo from '../shared/Seo';
import Header from '../Layouts/Header';
import Main from '../Layouts/Main';

export default function home() {
  return (
    <>
      <Seo page="Home">
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
      </Seo>
    </>
  );
}
