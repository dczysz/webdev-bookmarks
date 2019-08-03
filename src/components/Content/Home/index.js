import React from 'react';
import styled from 'styled-components';

import CardNav from '../../Nav/CardNav';

const Header = styled.header`
  text-align: center;
  padding: 0 1rem;

  & p {
    transition: font-size var(--timing);

    @media screen and (min-width: 700px) {
      font-size: 1.2rem;
    }
  }
`;

const Main = styled.main`
  background: var(--primary);
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  margin-top: 4rem;
`;

const Home = ({ pages }) => {
  return (
    <div>
      <Header>
        <p>
          A collection of bookmarks I've collected during my time doing web
          development
        </p>
      </Header>

      <Main>
        <CardNav pages={pages} />
      </Main>
    </div>
  );
};

export default Home;
