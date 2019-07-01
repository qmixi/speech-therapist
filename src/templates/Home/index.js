import React from 'react';

import { Profile } from 'types';
import { Container, Wrapper, Header, SubHeader } from './styles';

const Home = ({ profile: { fullName, position } }) => (
  <Container id="home">
    <Wrapper>
      <Header>{fullName}</Header>
      <SubHeader>{position}</SubHeader>
    </Wrapper>
  </Container>
);

Home.propTypes = {
  profile: Profile.isRequired,
};

export default Home;
