import React from 'react';
import styled from 'styled-components';

const StyledTag = styled.div`
  background-color: rgba(var(--primary), 0.9);
  color: rgb(var(--white));
  margin-left: 0.5rem
  padding: 0.2em 0.5em;
  font-size: 0.8rem;
  border-radius: 500px;
`;

const Tag = ({ name }) => {
  return <StyledTag>{name}</StyledTag>;
};

export default Tag;
