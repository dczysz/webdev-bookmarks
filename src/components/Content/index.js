import React from 'react';
import styled from 'styled-components';

import Card from './Card';

const StyledContent = styled.main`
  & h1 {
    text-align: center;
    font-weight: normal;
  }
`;
const Sites = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  // align-items: center;
`;

const Content = ({ name, sites }) => {
  return (
    <StyledContent>
      <h1>{name[0].toUpperCase() + name.slice(1)}</h1>
      <Sites>
        {sites ? sites.map(site => <Card key={site.name} {...site} />) : null}
      </Sites>
    </StyledContent>
  );
};

export default Content;
