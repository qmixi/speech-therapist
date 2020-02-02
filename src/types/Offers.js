import { shape, string, arrayOf } from 'prop-types';

const Photo = shape({
  url: string,
});

export const OfferPosition = shape({
  id: string,
  content: string,
});

export const OfferPositions = arrayOf(OfferPosition);

export const Offer = shape({
  id: string,
  title: string,
  photo: Photo,
  positions: OfferPositions,
});

export const Offers = arrayOf(Offer);
