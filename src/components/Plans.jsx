import React from 'react'
import Title from '../widgets/Title'
import PlansItem from './PlansItem'

const Plans = () => {
  return (
    <section id="planes" className="Plans">
      <Title 
        inner="Planes"
        className="Plans__title"
      />
      <div className="Plans__container">
        <PlansItem/>
        <PlansItem/>
        <PlansItem/>
      </div>
      <div className="Plans__overlay"></div>
    </section>
  )
}

export default Plans;
