import React from 'react';
import styled from 'styled-components';
import CardNavItem from './CardNavItem';

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 20rem;

  @media screen and (min-width: 700px) {
    max-width: 40rem;
  }
`;

const CardNav = ({ pages, clicked }) => {
  return (
    <Cards>
      {pages.map(page => (
        <CardNavItem
          key={page}
          path={page.toLowerCase()}
          name={page}
          clicked={clicked}
        />
      ))}
    </Cards>
  );
};

export default CardNav;
