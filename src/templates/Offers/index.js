import React from 'react';

import { Offers as OffersType } from 'types';
import Offer from 'components/Offer';
import { Container, Item } from './styles';

const Offers = ({ offers }) => {
  console.log('offers', offers);
  const isFullWidth = index => index === 0 && offers.length % 2 === 1;
  return (
    <Container>
      {offers.map((offer, index) => (
        <Item key={offer.id} fullWidth={isFullWidth(index)}>
          <Offer offer={offer} />
        </Item>
      ))}
    </Container>
  );
};

Offers.propTypes = {
  offers: OffersType.isRequired,
};

export default Offers;
