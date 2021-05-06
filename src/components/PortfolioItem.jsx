import React from 'react'
import Picture from './icons/Picture'

const PortfolioItem = ({cover, link, description, setSelected, selected, id}) => {
  
  const openItem = () => setSelected(id)
  const closeItem = () => setSelected('')
  
  return (
    <div 
      onClick={(id !== selected)? openItem : closeItem} 
      className={`PortfolioItem ${(id === selected)? 'open' : ''}`}
    >
      <div className="PortfolioItem__cover">
        <img className="PortfolioItem__cover--image" src={cover} alt="helix portafolio CIT"/>
        <Picture className="PortfolioItem__cover--icon"/>
      </div>
      <div className="PortfolioItem__container">
        <p className="PortfolioItem__container--description">
          {description}
        </p>
        <a 
          href={link}
          target="_blank"
          className="PortfolioItem__container--link" 
        > 
          Ver
        </a>
      </div>
    </div>
  )
}

export default PortfolioItem;
