import { shape, string, arrayOf } from 'prop-types';

const Photo = shape({
  url: string,
});

export const ProfileExperience = shape({
  id: string,
  content: string,
});

export const ProfileExperiences = arrayOf(ProfileExperience);

export const Profile = shape({
  fullName: string,
  bio: string,
  city: string,
  phone: string,
  email: string,
  experiences: ProfileExperiences,
  position: string,
  avatar: Photo,
});
