import React from 'react';

import { ProfileExperiences as Experiences } from 'types';
import { SubHeading, ListItem, List } from 'components/shared';
import { Wrapper } from './styles';

const ProfileExperiences = ({ experiences }) => {
  return (
    <Wrapper>
      <SubHeading>Mam doświadczenie w zakresie diagnozy i terapii:</SubHeading>
      <List>
        {experiences.map(item => (
          <ListItem key={item.id}>{item.content}</ListItem>
        ))}
      </List>
    </Wrapper>
  );
};

ProfileExperiences.propTypes = {
  experiences: Experiences.isRequired,
};

export default ProfileExperiences;
