import React, { useState } from 'react';
import styled from 'styled-components';

import TopNavItem from './TopNavItem';
import CardNav from '../CardNav';
import MobileNavToggle from './MobileNavToggle';

const StyledNav = styled.nav`
  border-bottom: 2px solid var(--primary);
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1000px;

  @media screen and (min-width: 700px) {
    justify-content: space-around;
    margin: 0 auto;
  }
`;

const CardNavMenu = styled.div`
  background: white;
  position: fixed;
  top: 38px;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DesktopLink = styled.div`
  display: none;

  @media screen and (min-width: 700px) {
    display: block;
  }
`;

const MobileLink = styled.li`
  @media screen and (min-width: 700px) {
    display: none;
  }
`;

const Nav = ({ pages }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <StyledNav>
        <Ul>
          <TopNavItem path="" name="Home" clicked={() => setShowMenu(false)} />

          {pages.map(page => (
            <DesktopLink key={page}>
              <TopNavItem path={page.toLowerCase()} name={page} />
            </DesktopLink>
          ))}

          <MobileLink>
            <MobileNavToggle clicked={() => setShowMenu(!showMenu)} />
          </MobileLink>
        </Ul>
      </StyledNav>

      {showMenu ? (
        <CardNavMenu>
          <CardNav pages={pages} clicked={() => setShowMenu(false)} />
        </CardNavMenu>
      ) : null}
    </>
  );
};

export default Nav;
