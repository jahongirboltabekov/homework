import React from 'react'
import img from '../../assets/footer_img.png'
import './Footer.scss'
function Footer() {
  return (
    <div>
        <div className="container">
            <div className="footer">
                <div className="footer_text">
                    <h3>Subscribe To Newsletter</h3>
                    <p>Get free guide about smart watches daily. </p>
                    <div className="input_email">
                        <input type="text" placeholder='Enter Email Address'/>
                        <button>Subscribe</button>
                    </div>
                </div>
                <div className="footer_img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
        <div className="footer_div">
            <p>Copyright @ 2022 | Mohid</p>
        </div>
    </div>
  )
}

export default Footer