import React from 'react';
import Counter from '../components/Counter'
import Plans from '../components/Plans';
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
      <Plans/>
      <Counter/>
      <Footer/>
    </main>
  )
}

export default Home;
