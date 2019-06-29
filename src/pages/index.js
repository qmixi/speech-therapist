import React from 'react';
import { graphql } from 'gatsby';
import { arrayOf, shape } from 'prop-types';

import MainTemplate from 'templates/MainTemplate';
import Home from 'templates/Home';
import Quotation from 'templates/Quotation';
import Profile from 'templates/Profile';
import Experiences from 'templates/Experiences';
import Offers from 'templates/Offers';
import Contact from 'templates/Contact';
import SEO from 'components/Seo';
import { ModalProvider } from 'components/Modal';

const IndexPage = ({
  data: {
    therapist: { profiles, quotations, experiences, offers },
  },
}) => (
  <MainTemplate>
    <ModalProvider>
      <SEO title="" keywords={[`logopeda`, `neurologopeda`, `Toruń`]} />
      <Home profile={profiles[0]} />
      <Quotation quotations={quotations} />
      <Profile profile={profiles[0]} />
      <Experiences experiences={experiences} />
      <Offers offers={offers} />
      <Contact profile={profiles[0]} />
    </ModalProvider>
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
        photo {
          url
        }
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
