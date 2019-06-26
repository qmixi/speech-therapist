import React from 'react';

import { Experiences as ExperiencesType } from 'types';
import { Heading } from 'components/shared';
import ExperienceStage from 'components/ExperienceStage';
import { Container } from './styles';

// Experience Types
const STUDIES = 'Studies';
const CONFERENCE = 'Conference';
const PROFESSIONAL = 'Professional';

const Experiences = ({ experiences }) => {
  console.log('experiences', experiences);
  const getExperiences = type => experiences.filter(item => item.type === type);
  return (
    <Container>
      <Heading>Doświadczenie i Wykształcenie</Heading>
      <ExperienceStage title="Ukończyłam:" items={getExperiences(STUDIES)} />
      <ExperienceStage
        title="Brałam udział w:"
        items={getExperiences(CONFERENCE)}
      />
      <ExperienceStage
        title="Doświadczenie zawodowe:"
        items={getExperiences(PROFESSIONAL)}
      />
    </Container>
  );
};

Experiences.propTypes = {
  experiences: ExperiencesType.isRequired,
};

export default Experiences;
