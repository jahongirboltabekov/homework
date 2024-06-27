import React from 'react'
import './Card.scss'
import card1 from '../../assets/card1.png'
import card2 from '../../assets/card2.png'
import card3 from '../../assets/card3.png'


function Card() {
  return (
    <div>
        <div className="container">
            <div className="cards">
                <div className="card">
                    <img src={card1} alt="" />
                    <div className="about">
                        <h2>Apple</h2>
                        <p>Apple is one of the most famous smart watches providing company.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={card2} alt="" />
                    <div className="about">
                        <h2>Xiaomi</h2>
                        <p>Xiaomi smart watches are produced by MI company.</p>
                    </div>
                </div>
                <div className="card">
                    <img src={card3} alt="" />
                    <div className="about">
                        <h2>FitBit</h2>
                        <p>FitBit smart watches are best for there health and fitness features.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card