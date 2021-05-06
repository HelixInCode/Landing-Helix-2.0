import React from 'react';
import Contact from '../components/Contact';
import Counter from '../components/Counter'
import Plans from '../components/Plans';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services'
import Us from '../components/Us'
import Footer from '../widgets/Footer'
import Header from '../widgets/Header'

const Home = () => {
  return (
    <main>
      <Header/>
      <Services/>
      <Us/>
      <Portfolio/>
      <Plans/>
      <Counter/>
      <Contact/>  
      <Footer/>
    </main>
  )
}

export default Home;
