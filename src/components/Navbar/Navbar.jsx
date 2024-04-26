import { useState } from 'react'
import './Navbar.css'

export default function Navbar({ setPage }) {
    const [activeTab, setActiveTab] = useState('main')
    
    function handleClick(e){
        e.target.id === 'main' ? setPage(0) : setPage(1)
        setActiveTab(e.target.id)
    }
    
    return(
        <div className='nav'>
            <div id='main' className={`hover nav-item ${ activeTab === 'main' ? 'active' : '' }`} onClick={handleClick}>POSTS</div>
            <div className='nav-item'>||</div>
            <div id='about' className={`hover nav-item ${ activeTab === 'about' ? 'active' : '' }`} onClick={handleClick}>ABOUT</div>
        </div>
        
    )
}