import React from 'react';

import { Profile } from 'types';
import { Wrapper, Title, Content } from './styles';

const Bio = ({ profile }) => {
  return (
    <Wrapper>
      <Title>{profile.fullName}</Title>
      <Content>&nbsp;-&nbsp;&nbsp;{profile.bio}</Content>
    </Wrapper>
  );
};

Bio.propTypes = {
  profile: Profile.isRequired,
};

export default Bio;
