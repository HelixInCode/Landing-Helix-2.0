import React from 'react';
import FacebookButton from '../components/FacebookButton';
import InstagramButton from '../components/InstagramButton';

const SocialMedias = () => {
  return (
    <div className="SocialMedias">
      <FacebookButton link="https://www.facebook.com/helixincode.ar/"/>
      <InstagramButton link="https://www.instagram.com/helix_in_code/"/>
    </div>
  )
}

export default SocialMedias;
