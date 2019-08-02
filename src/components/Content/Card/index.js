import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const A = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
  border-radius: var(--radius);
  margin: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: var(--shadow-big);
  background-color: var(--white);
  transition: box-shadow var(--timing-shadow);

  @media screen and (min-width: 700px) {
    width: 300px

    &:hover {
      box-shadow: var(--shadow-small);
    }
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  min-height: 200px; // Placeholder height, gets reset to auto on img load
  opacity: 0;
  transition: opacity 0.5s;
`;

const Text = styled.div`
  // margin-top: auto;
  padding: 1rem;

  & h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: normal;
  }

  & p {
    margin: 0;
  }
`;

const Card = ({ name, url, description, img }) => {
  const applyLoadedStyles = el => {
    el.setAttribute('style', 'min-height: auto; opacity: 1');
  };

  return (
    <A href={url} target="_blank" rel="noopener noreferrer">
      <LazyLoad once height={200}>
        <Img
          src={img ? img : ''}
          alt={name}
          onLoad={e => applyLoadedStyles(e.target)}
        />
      </LazyLoad>
      <Text>
        <h2>{name}</h2>
        {description ? <p>{description}</p> : null}
      </Text>
    </A>
  );
};

export default Card;
