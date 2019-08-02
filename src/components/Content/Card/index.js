import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

const A = styled.a`
  text-decoration: none;
  color: inherit;
  width: 100%;
  border-radius: 4px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 #0003, 0 12px 24px 0 #0002;
  background-color: #fff;
  transition: box-shadow 0.3s;

  @media screen and (min-width: 700px) {
    width: 300px

    &:hover {
      box-shadow: 0 2px 4px 0 #0003, 0 3px 10px 0 #0002;
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
