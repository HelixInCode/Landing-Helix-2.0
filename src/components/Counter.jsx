import React from 'react'

const Counter = () => {
  return (
    <section className="Counter">
      <div className="Counter__container">
        <div className="CounterItem">
          <i className="fas fa-code fa-3x"></i>
          <span className="CounterItem__amount" data-cantidad-total="5580">0</span>
          <span className="CounterItem__name">Líneas de Código</span>
        </div>
        
        <div className="CounterItem">
          <i className="fas fa-check-circle fa-3x"></i>
          <span className="CounterItem__amount" data-cantidad-total="85">0</span>
          <span className="CounterItem__name">Proyectos Terminados</span>
        </div>
        
        <div className="CounterItem">
          <i className="far fa-clock fa-3x"></i>
          <span className="CounterItem__amount" data-cantidad-total="3840">0</span>
          <span className="CounterItem__name">Horas de Trabajo</span>
        </div>
        
        <div className="CounterItem">
          <img src="src/assets/img/mate.svg" alt="mate helix"/>
          <span className="CounterItem__amount" data-cantidad-total="3500">0</span>
          <span className="CounterItem__name">Mates</span>
        </div>
        
        <div className="CounterItem">
          <img src="src/assets/img/arepa.svg" alt="arepa helix"/>
          <span className="CounterItem__amount" data-cantidad-total="800">0</span>
          <span className="CounterItem__name">Arepas</span>
        </div>
      </div>
      <div className="Counter__overlay">

      </div>
    </section>
  )
}

export default Counter;