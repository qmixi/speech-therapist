import React from 'react';
import { Link, graphql } from 'gatsby';
import { arrayOf, shape } from 'prop-types';

import MainTemplate from 'templates/MainTemplate';
import Home from 'templates/Home';
import Quotation from 'templates/Quotation';
import Profile from 'templates/Profile';
import Experiences from 'templates/Experiences';
import SEO from 'components/Seo';

const IndexPage = ({
  data: {
    therapist: { profiles, quotations, experiences },
  },
}) => (
  <MainTemplate>
    <>
      <SEO title="" keywords={[`logopeda`, `neurologopeda`, `Toruń`]} />
      <Home profile={profiles[0]} />
      <Quotation quotations={quotations} />
      <Profile profile={profiles[0]} />
      <Experiences experiences={experiences} />
      <Link to="/page-2/">Go to page 2</Link>
    </>
  </MainTemplate>
);

export const query = graphql`
  query {
    therapist {
      quotations {
        id
        text
        author
      }
      profiles {
        fullName
        bio
        phone
        email
        position
        experiences {
          id
          content
        }
      }
      experiences {
        id
        content
        type
      }
      offers {
        id
        title
        positions {
          id
          content
        }
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
