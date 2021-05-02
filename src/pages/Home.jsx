import React from 'react'
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
      <Footer/>
    </main>
  )
}

export default Home;
