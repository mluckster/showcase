import './Navbar.css'

export default function Navbar({ setPage }) {
    function handleClick(e){
        console.log(e.target.id)
        if (e.target.id === 'main'){
            setPage(0)
        } else{
            setPage(1)
        }
    }
    
    return(
        <div className='nav'>
            <div id='main' onClick={handleClick}>SHOWCASE</div>
            <div>||</div>
            <div id='about' onClick={handleClick}>ABOUT</div>
        </div>
        
    )
}