import React from 'react';
import Navbar from './Navbar';
import SocialMedias from './SocialMedias'
// import Hero from '../components/Hero';

const Header = () => {
  return (
    <header>
      <Navbar/>
      <SocialMedias/>
      {/* <Hero/> */}
    </header>
  )
}

export default Header;
