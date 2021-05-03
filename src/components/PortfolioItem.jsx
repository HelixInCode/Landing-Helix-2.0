import React from 'react'

const PortfolioItem = ({cover, link, description, setSelected, selected, id}) => {
  
  const openItem = () => setSelected(id)
  const closeItem = () => setSelected('')
  
  return (
    <div 
      onClick={(id !== selected)? openItem : closeItem} 
      className={`PortfolioItem ${(id === selected)? 'open' : ''}`}
    >
      <img className="PortfolioItem__cover" src={cover} alt="helix portafolio CIT"/>
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
