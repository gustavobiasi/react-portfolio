import React, { Component } from 'react';
import SOCIAL_PROFILES from '../data/socialProfile';

//isso aqui é um arrow function () =>
//isso aqui define uma constante const
//Stateless Function Component
const SocialProfile = (props) => {
  const { link, image } = props.socialProfile;

  return (
    <span>
      <a href={link}>
        <img src={image} style={{ width: 35, height: 35, margin: 10 }} />
      </a>
    </span>
  );
};

const SocialProfiles = () => (
  <div>
    <h2>Minhas mídias Sociais</h2>
    <div>
      {SOCIAL_PROFILES.map((SOCIAL_PROFILE) => {
        return <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />;
      })}
    </div>
  </div>
);

export default SocialProfiles;
