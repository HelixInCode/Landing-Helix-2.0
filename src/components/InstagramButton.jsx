import React from 'react';
import MediaButton from '../widgets/MediaButton';
import Instagram from './icons/Instagram';

const InstagramButton = ({link}) => {
  return (
    <MediaButton type="instagram" link={link}>
      <Instagram className="MediaButton__icon"/>
    </MediaButton>
  )
}

export default InstagramButton;
