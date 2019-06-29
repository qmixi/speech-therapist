import React from 'react';

import { Offer as OfferType } from 'types';
import { ModalConsumer } from 'components/Modal';
import { List, ListItem } from 'components/shared';
import { Wrapper, Title } from './styles';

const Offer = ({ offer }) => {
  const offersPositionsList = (
    <List>
      {offer.positions.map(item => (
        <ListItem key={item.id}>{item.content}</ListItem>
      ))}
    </List>
  );
  return (
    <ModalConsumer>
      {({ showModal }) => (
        <Wrapper
          image={offer.photo.url}
          onClick={() => showModal(offersPositionsList, offer.title)}
        >
          <Title>{offer.title}</Title>
        </Wrapper>
      )}
    </ModalConsumer>
  );
};

Offer.propTypes = {
  offer: OfferType.isRequired,
};

export default Offer;
