import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  const cardComponent = robots.map(({ id, name, email }) => (
    <Card id={id} name={name} email={email} key={id} />
  ));
  return <div>{cardComponent}</div>;
};

export default CardList;
