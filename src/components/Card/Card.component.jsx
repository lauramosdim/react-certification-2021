import React from 'react';
import {
  CardWrapper,
  CardImage,
  CardInfo,
  CardTitle,
  CardDescription,
  CardContent,
} from './Card.styles';

const Card = ({ title, description, bckgImage }) => {
  return (
    <CardWrapper>
      <CardContent>
        <CardImage bckgImage={bckgImage} />
        <CardInfo>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardInfo>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;
