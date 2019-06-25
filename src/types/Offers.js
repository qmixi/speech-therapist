import { shape, string, arrayOf } from 'prop-types';

export const Offer = shape({
  id: string,
  title: string,
  positions: OfferPositions,
});

export const Offers = arrayOf(Offer);

export const OfferPosition = shape({
  id: string,
  content: string,
});

export const OfferPositions = arrayOf(OfferPosition);
