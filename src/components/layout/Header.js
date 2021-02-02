import React from 'react'
import logo from './checklist.png'
const Header = () => {
    return (
        <div className='container text-center mb-3 d-flex justify-content-center align-items-center'>
            <img src={logo} style={{width:'60px'}} className='mr-2'></img>
            <h2>To do list</h2>
        </div>
    )
}

export default Header
