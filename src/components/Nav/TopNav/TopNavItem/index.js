import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'active';

const Li = styled.li`
  margin: 0.5rem 0;
  // display: none;

  @media screen and (min-width: 700px) {
    display: block;
  }
`;

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  color: black;
  padding: 0.5rem;
  text-transform: capitalize;
  text-decoration: none;
  transition: all var(--timing-nav);
  border-bottom: 2px solid rgba(var(--secondary), 0);

  &.${activeClassName} {
    color: rgb(var(--secondary));
    border-color: rgba(var(--secondary), 1);
    pointer-events: none;
  }

  &:hover {
    color: rgb(var(--secondary));
    border-color: rgb(var(--secondary));
  }
`;

const TopNavItem = ({ name, path, clicked }) => {
  return (
    <Li>
      <StyledNavLink
        exact
        to={'/' + path.toLowerCase()}
        activeClassName={activeClassName}
        onClick={clicked ? clicked : null}
      >
        {name}
      </StyledNavLink>
    </Li>
  );
};

export default TopNavItem;
