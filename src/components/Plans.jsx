import React, {useState} from 'react';
import Title from '../widgets/Title';
import PlansItem from './PlansItem';
import initialState from '../initialState';

const Plans = () => {
  const [plans] = useState(initialState.plans)
  return (
    <section id="planes" className="Plans">
      <Title 
        inner="Planes"
        className="Plans__title"
      />
      <div className="Plans__container">
        {plans.map(item =>(
          <PlansItem {...item} key={item.id}/>
        ))}
      </div>
      <div className="Plans__overlay"></div>
    </section>
  )
}

export default Plans;
