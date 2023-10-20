import React, { useState } from 'react'
import Timer from './timer'

function Card({ title, cost, valid }) {
  const [active, setActive] = useState(false)

  const Buy = ({ cost, valid }) => {
    let period
    if (valid === 10) {
      period = 86400000
    }
    if (valid === 20) {
      period = 86400000 * 2
    } else {
      period = 86400000 * 3
    }
    const handleBuy = () => {
      setActive(!active)
      setTimeout(() => {
        setActive(false)
      }, period)
    }
    return <button onClick={handleBuy}>BUY ({cost})</button>
  }

  return (
    <div className='App'>
      <div className='card'>
        <div className='title'>
          <h3>{title}</h3>
        </div>
        <div className='card-info'>
          <ul>
            <li>Valid for {valid} days</li>
            <li>Worth {cost} per sale</li>
            <li>10% return on every client sale</li>
          </ul>
        </div>
        <div className='btn-timer'>
          {active ? <Timer valid={valid} /> : <Buy cost={cost} valid={valid} />}
        </div>
      </div>
    </div>
  )
}

export default Card
