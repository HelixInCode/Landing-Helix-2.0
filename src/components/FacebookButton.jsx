import React from 'react';
import MediaButton from '../widgets/MediaButton';
import Facebook from './icons/Facebook';

const FacebookButton = ({link}) => {
  return (
    <MediaButton type="facebook" link={link}>
      <Facebook className="MediaButton__icon"/>
    </MediaButton>
  )
}

export default FacebookButton;
