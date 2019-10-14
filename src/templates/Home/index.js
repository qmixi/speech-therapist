import React from 'react';
import { shape } from 'prop-types';

import { Profile } from 'types';
import { Container, Wrapper, Header, SubHeader } from './styles';

const Home = ({ profile: { fullName, position }, file }) => {
  return (
    <Container
      id="home"
      Tag="section"
      fluid={file.childImageSharp.fluid}
      backgroundColor="#040e18"
    >
      <Wrapper>
        <Header>{fullName}</Header>
        <SubHeader>{position}</SubHeader>
      </Wrapper>
    </Container>
  );
};

Home.propTypes = {
  profile: Profile.isRequired,
  file: shape({}).isRequired,
};

export default Home;
