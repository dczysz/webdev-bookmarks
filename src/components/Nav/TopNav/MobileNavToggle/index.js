import React from 'react';
import styled from 'styled-components';

const Toggle = styled.div`
  height: 100%;
  width: 38px;
  padding: 0 10%;
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & div {
    --height: 3px;
    width: 100%;
    height: var(--height);
    background-color: rgb(var(--primary));
    margin: calc(var(--height) * 1) 0;
  }

  ::before,
  ::after {
    content: '';
    display: block;
    width: 100%;
    height: var(--height);
  }
`;

const MobileNavToggle = ({ clicked }) => {
  return (
    <Toggle onClick={clicked}>
      <div />
      <div />
      <div />
    </Toggle>
  );
};

export default MobileNavToggle;
