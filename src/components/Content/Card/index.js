import React from 'react';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

import Tag from './Tag';

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
  background-color: rgb(var(--white));
  transition: box-shadow var(--timing);
  position: relative;

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
  min-height: calc(
    300px / 1.5625
  ); // Placeholder height, gets reset to auto on img load
  opacity: 0;
  transition: opacity var(--timing-img);
  position: relative;
  background: #0003;

  &::before {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
    opacity: 0.5;
    text-wrap: no-wrap;
  }
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

const Tags = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  padding: 0.5rem;
`;

const Card = ({ name, url, description, img, tagNames }) => {
  // Fade image in and remove min-height placeholder value
  const applyStyles = (el, styles) => {
    el.setAttribute('style', styles);
  };

  return (
    <A href={url} target="_blank" rel="noopener noreferrer">
      <LazyLoad once height={200} resize>
        <Img
          src={img ? img : ''}
          alt={img ? name : 'No photo available'}
          onLoad={e => applyStyles(e.target, 'min-height: auto; opacity: 1')}
          onError={e => applyStyles(e.target, 'opacity: 1')}
        />
        <Tags>
          {tagNames
            ? tagNames.map(name => <Tag key={name} name={name} />)
            : null}
        </Tags>
      </LazyLoad>
      <Text>
        <h2>{name}</h2>
        {description ? <p>{description}</p> : null}
      </Text>
    </A>
  );
};

export default Card;
