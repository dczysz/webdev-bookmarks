import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const activeClassName = 'active';

const Li = styled.li`
  margin: 1rem 0;
`;

const StyledNavLink = styled(NavLink).attrs({ activeClassName })`
  color: black;
  padding: 1rem;
  text-transform: capitalize;
  text-decoration: none;

  &.${activeClassName} {
    color: #ff7bda;
    pointer-events: none;
  }

  &:hover {
    color: #ff7bda;
    opacity: 0.5;
  }

  @media screen and (min-width: 768px) {
    padding: 0.5rem 0.75rem;
  }
`;

const NavItem = ({ name, path }) => {
  return (
    <Li>
      <StyledNavLink
        exact
        to={'/' + path.toLowerCase()}
        activeClassName={activeClassName}
      >
        {name}
      </StyledNavLink>
    </Li>
  );
};

export default NavItem;
