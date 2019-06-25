import { shape, string, arrayOf } from 'prop-types';

export const Profile = shape({
  fullName: string,
  bio: string,
  phone: string,
  email: string,
  experiences: ProfileExperiences,
});

export const ProfileExperience = shape({
  id: string,
  content: string,
});

export const ProfileExperiences = arrayOf(ProfileExperience);
