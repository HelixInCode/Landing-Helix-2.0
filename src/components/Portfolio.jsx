import React, {useState} from 'react';
import Title from '../widgets/Title';
import PortfolioItem from './PortfolioItem';
import initialState from '../initialState';

const Portfolio = () => {
  const [portfolio] = useState(initialState.portfolio)
  const [selected, setSelected] = useState('')
  
  return (
    <section id="portafolio" className="Portfolio">
      
      <Title
        inner="Portafolio"
        className="Portfolio__title"
      />

      <div className="portafolio-container">
        {portfolio.map(item =>(
          <PortfolioItem 
            {...item}
            setSelected={setSelected}
            selected={selected}
            key={item.id}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio
