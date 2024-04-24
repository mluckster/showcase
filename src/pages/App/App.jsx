import './App.css';
import Navbar from '../../components/Navbar/Navbar'
import { useState } from 'react';
import Main from '../Main/Main'
import About from '../About/About'
import Landing from '../Landing/Landing';

export default function App() {
    const [page, setPage] = useState(0)
    const [landing, setLanding] = useState(true)

    return (
        <> 
            {
                landing ?  
                <div className="App">
                    <Landing setLanding = { setLanding } landing = { landing } />
                </div>
                :
                <div className="App">
                    <Navbar setPage = { setPage }/>
                    {
                    page ? 
                    <div className={ `container` }>
                        < About />
                    </div>
                    :
                    <div className={ `container` }>
                        < Main />
                    </div>
                    }
                </div>
            }
        </>
    );
}
