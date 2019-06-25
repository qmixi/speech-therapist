import React from 'react';
import sample from 'lodash/sample';

import { Quotations } from 'types';
import { Container, Content, Author } from './styles';

const Quotation = ({ quotations }) => {
  const quotation = sample(quotations);
  console.log('quotations', quotations);
  return (
    <Container>
      <Content>„{quotation.text}”</Content>
      <Author>{quotation.author}</Author>
    </Container>
  );
};

Quotation.propTypes = {
  quotations: Quotations.isRequired,
};

export default Quotation;
