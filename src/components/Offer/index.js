import React from 'react';

import { Offer as OfferType } from 'types';
import { Wrapper, Title } from './styles';

const Offer = ({ offer }) => {
  return (
    <Wrapper image={offer.photo.url}>
      <Title>{offer.title}</Title>
    </Wrapper>
  );
};

Offer.propTypes = {
  offer: OfferType.isRequired,
};

export default Offer;
