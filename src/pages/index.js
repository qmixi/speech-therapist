import React from 'react';
import { Link, graphql } from 'gatsby';
import { arrayOf, shape } from 'prop-types';

import SEO from 'components/Seo';
import Quottion from 'components/Quotation';

const IndexPage = ({
  data: {
    therapist: { quotations },
  },
}) => (
  <div>
    <SEO title="" keywords={[`logopeda`, `neurologopeda`, `Toruń`]} />
    <Quottion data={quotations} />
    <h1>Logopeda Toruń</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export const query = graphql`
  query {
    therapist {
      quotations {
        id
        text
        author
      }
    }
  }
`;

IndexPage.propTypes = {
  data: shape({
    therapist: shape({
      quotations: arrayOf(shape({})),
    }),
  }).isRequired,
};

export default IndexPage;
