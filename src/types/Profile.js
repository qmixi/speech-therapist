import { shape, string, arrayOf } from 'prop-types';

export const Profile = shape({
  fullName: string,
  bio: string,
  city: string,
  phone: string,
  email: string,
  experiences: ProfileExperiences,
  position: string,
});

export const ProfileExperience = shape({
  id: string,
  content: string,
});

export const ProfileExperiences = arrayOf(ProfileExperience);
