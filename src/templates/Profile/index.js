import React from 'react';

import { Profile as ProfileType } from 'types';
import { Heading, LightText } from 'components/shared';
import Bio from 'components/Bio';
import ProfileExperiences from 'components/ProfileExperiences';
import { Container, Avatar, Header } from './styles';

const Profile = ({ profile }) => {
  console.log('profile', profile);
  return (
    <Container>
      <Header>
        <Avatar />
      </Header>
      <Heading>O mnie:</Heading>
      <Bio profile={profile} />
      <ProfileExperiences experiences={profile.experiences} />
      <LightText>
        Oferuję pomoc w zakresie diagnozy i terapii logopedycznej i
        neurologopedycznej dzieciom, młodzieży i dorosłym.
      </LightText>
    </Container>
  );
};

Profile.propTypes = {
  profile: ProfileType.isRequired,
};

export default Profile;
