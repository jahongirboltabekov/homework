import React from 'react'
import person1 from '../../assets/person1.png'
import person2 from '../../assets/person2.png'
import point from '../../assets/point.svg'
import { FaStar } from "react-icons/fa6";

import './Client.scss'

function Client() {
  return (
    <div>
        <div className="container">
            <div className="clients">
                <p>Here are our some of the best clients.</p>
                <h3>What People Say About Us</h3>
                <div className="client_cards">
                    <div className="card">
                        <img src={person1} alt="" />
                        <div className="about">
                            <h2>Hamza Faizi</h2>
                            <p className='p'>Don’t waste time, just order! This is the best website to puschase smart watches.</p>
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src={person2} alt="" />
                        <div className="about">
                            <h2>Hafiz Huzaifa</h2>
                            <p className='p'>I’ve been purchasing smart watches of Mohid for a long time. All the products are good quality.</p>
                            <div className="stars">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                    </div>
                </div>
                <img src={point} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Client