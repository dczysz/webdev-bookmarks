import React from 'react';
import styled from 'styled-components';

import Card from './Card';
import Home from './Home';

const Main = styled.main`
  max-width: 1400px;
  margin: 0 auto;

  & h1 {
    text-align: center;
    font-weight: normal;
    margin: 2rem 0;
  }
`;
const Sites = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

// Returns shuffled array after copying one level deep
const shuffleObjArr = arr => {
  const copy = arr.map(obj => ({ ...obj }));
  let ctr = copy.length;
  let temp, index;

  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = copy[ctr];
    copy[ctr] = copy[index];
    copy[index] = temp;
  }
  return copy;
};

const Content = ({ name, sites }) => {
  return (
    <Main>
      <h1>{name[0].toUpperCase() + name.slice(1)}</h1>

      {sites ? (
        <Sites>
          {shuffleObjArr(sites).map(site => (
            <Card key={site.name} {...site} />
          ))}
        </Sites>
      ) : (
        <Home />
      )}
    </Main>
  );
};

export default Content;
