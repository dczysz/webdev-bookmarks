import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'active';

const Link = styled(NavLink)`
  color: inherit;
  margin: 1rem;
  height: 8rem;
  width: 8rem;
  background-color: rgb(var(--white));
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: var(--shadow-big);
  text-decoration: none;
  border-radius: var(--radius);
  transition: box-shadow var(--timing), color var(--timing);

  &.${activeClassName} {
    color: rgb(var(--primary));
    box-shadow: var(--shadow-small);
    pointer-events: none;
  }

  &:hover {
    box-shadow: var(--shadow-small);
    color: rgb(var(--primary));
  }
`;

const Text = styled.span`
  text-transform: capitalize;
`;

const CardNavItem = ({ name, path, clicked }) => {
  return (
    <Link
      exact
      to={'/' + path.toLowerCase()}
      activeClassName={activeClassName}
      onClick={clicked}
    >
      <Text>{name}</Text>
    </Link>
  );
};

export default CardNavItem;
