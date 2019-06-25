import { shape, string, arrayOf } from 'prop-types';

export const Quotation = shape({
  id: string,
  text: string,
  author: string,
});

export const Quotations = arrayOf(Quotation);
