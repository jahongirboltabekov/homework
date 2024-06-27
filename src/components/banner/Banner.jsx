import React from 'react'
import './Banner.scss'
import { IoSearchSharp} from "react-icons/io5";
import banner_img from '../../assets/banner_watch.png'

function Banner() {
  return (
    <div className="banner_div">
        <div className="container">
            <div className="wrap">
                <div className="banner_text">
                    <h1>Discover Most Suitable Watches</h1>
                    <p>Find the best, reliable, and cheap smart watches here. We focus on product quality. Here you can find smart watches of almost all brands. So why you are waiting? Just order now!</p>
                    <div className="search">
                        <IoSearchSharp className='icon'/>
                        <input type="text" placeholder='Find the best brands' />
                        <button>Search</button>
                    </div>
                </div>
                <div className="banner_img">
                    <img src={banner_img} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner