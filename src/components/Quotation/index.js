import React from 'react';
import { arrayOf, shape } from 'prop-types';
import sample from 'lodash/sample';

const Quotation = ({ data }) => {
  const quotation = sample(data);
  console.log('quotation', quotation);
  return (
    <div>
      <h1>QUOTATION</h1>
      <div>{quotation.text}</div>
      <div>{quotation.author}</div>
    </div>
  );
};

Quotation.propTypes = {
  data: arrayOf(shape({})).isRequired,
};

export default Quotation;
