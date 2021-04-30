import React from 'react'
import MediaButton from '../widgets/MediaButton'

const InstagramButton = ({link}) => {
  return (
    <MediaButton type="instagram" link={link}>
      instagram
    </MediaButton>
  )
}

export default InstagramButton;
