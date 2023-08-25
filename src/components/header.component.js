import React from 'react'
import shubhag from '../images/shubhag.png'
import '../componentcss/header.css'
import Button from './button.component'
const Header = ()=>{
    return(
        <header>
            <div className='align-left'>
                <img src={shubhag} alt="shubhag logo" />
            </div>
            <div className='align-right'>
                <Button text = "Log In"/>
            </div>
        </header>

    )
}

export default Header