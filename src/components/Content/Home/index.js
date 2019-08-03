import React from 'react';
import styled from 'styled-components';

import CardNav from '../../Nav/CardNav';

const Header = styled.header`
  text-align: center;
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
          This is a collection of bookmarks I've collected in my short time
          doing web dev
        </p>
      </Header>

      <Main>
        <CardNav pages={pages} />
      </Main>
    </div>
  );
};

export default Home;
