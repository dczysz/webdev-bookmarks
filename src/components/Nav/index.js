import React from 'react';

import styled from 'styled-components';
import NavItem from './NavItem';

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  border-bottom: 1px solid;
`;

const Nav = ({ pages }) => {
  return (
    <nav>
      <Ul>
        <NavItem path="" name="Home" />
        {pages.map(page => (
          <NavItem key={page} path={page.toLowerCase()} name={page} />
        ))}
      </Ul>
    </nav>
  );
};

export default Nav;
