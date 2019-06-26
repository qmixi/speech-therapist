import React from 'react';
import { string } from 'prop-types';

import { Experience } from 'types';
import { SubHeading, List, ListItem } from 'components/shared';
import { Stage } from './styles';

const ExperienceStage = ({ title, items }) => {
  console.log('title', title);
  console.log('items', items);
  return (
    <Stage>
      <SubHeading>{title}</SubHeading>
      <List>
        {items.map(item => (
          <ListItem key={item.id}>{item.content}</ListItem>
        ))}
      </List>
    </Stage>
  );
};

ExperienceStage.propTypes = {
  title: string.isRequired,
  items: Experience.isRequired,
};

export default ExperienceStage;
