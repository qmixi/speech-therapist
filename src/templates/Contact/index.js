import React from 'react';

import { Profile } from 'types';
import { Title, Wrapper, Link, Info } from './styles';

const Contact = ({ profile }) => {
  return (
    <>
      <Wrapper id="contact">
        <Title>Zapraszam do gabinetu</Title>
        <Link href={`mailto:${profile.email}`}>{profile.email}</Link>
        <br />
        <Link href={`tel:${profile.phone}`}>{profile.phone}</Link>
      </Wrapper>
      <Info>
        Jeśli mają Państwo jakiekolwiek pytania lub chcą zarezerwować wizytę,
        <br />
        zapraszam do kontaktu telefonicznego, bądź mailowego.
      </Info>
    </>
  );
};

Contact.propTypes = {
  profile: Profile.isRequired,
};

export default Contact;
