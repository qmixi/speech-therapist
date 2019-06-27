import React from 'react';

import { Experiences as ExperiencesType } from 'types';
import { Heading } from 'components/shared';
import ExperienceStage from 'components/ExperienceStage';
import briefcase from 'assets/images/briefcase.svg';
import microphone from 'assets/images/microphone.svg';
import globe from 'assets/images/globe.svg';
import { Container, Header } from './styles';

// Experience Types
const STUDIES = 'Studies';
const CONFERENCE = 'Conference';
const PROFESSIONAL = 'Professional';

const Experiences = ({ experiences }) => {
  console.log('experiences', experiences);
  const getExperiences = type => experiences.filter(item => item.type === type);
  return (
    <Container>
      <Header>
        <Heading>Doświadczenie i Wykształcenie</Heading>
      </Header>
      <ExperienceStage
        title="Ukończyłam:"
        items={getExperiences(STUDIES)}
        icon={globe}
      />
      <ExperienceStage
        title="Brałam udział w:"
        items={getExperiences(CONFERENCE)}
        icon={microphone}
      />
      <ExperienceStage
        title="Doświadczenie zawodowe:"
        items={getExperiences(PROFESSIONAL)}
        icon={briefcase}
      />
    </Container>
  );
};

Experiences.propTypes = {
  experiences: ExperiencesType.isRequired,
};

export default Experiences;
