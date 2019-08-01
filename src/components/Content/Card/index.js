import React from 'react';
import styled from 'styled-components';

const A = styled.a`
  text-decoration: none;
  color: inherit;
  width: 300px;
  border-radius: 4px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 4px 8px 0 #0003, 0 12px 24px 0 #0002;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 2px 4px 0 #0003, 0 3px 10px 0 #0002;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
`;

const Text = styled.div`
  margin-top: auto;
  padding: 1rem;

  & h2 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    text-align: center;
    font-weight: normal;
  }

  & p {
    margin: 0;
  }
`;

const Card = ({ name, url, description, img }) => {
  return (
    <A href={url} target="_blank" rel="noopener noreferrer">
      <Img
        src={
          img
            ? img
            : `https://via.placeholder.com/300x${100 +
                Math.floor(Math.random() * 300)}`
        }
        alt={name}
      />
      <Text>
        <h2>{name}</h2>
        {description ? <p>{description}</p> : null}
      </Text>
    </A>
  );
};

export default Card;
