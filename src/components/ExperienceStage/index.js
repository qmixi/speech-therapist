import React from 'react';
import { string } from 'prop-types';

import { Experiences } from 'types';
import { SubHeading, List, ListItem } from 'components/shared';
import { Stage, StageIcon } from './styles';

const ExperienceStage = ({ title, items, icon }) => {
  return (
    <Stage>
      <SubHeading>{title}</SubHeading>
      <List>
        {items.map(item => (
          <ListItem key={item.id}>{item.content}</ListItem>
        ))}
      </List>
      <StageIcon src={icon} width={105} />
    </Stage>
  );
};

ExperienceStage.propTypes = {
  title: string.isRequired,
  items: Experiences.isRequired,
  icon: string.isRequired,
};

export default ExperienceStage;
