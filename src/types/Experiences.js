import { shape, string, arrayOf } from 'prop-types';

export const Experience = shape({
  id: string,
  content: string,
  type: string,
});

export const Experiences = arrayOf(Experience);
