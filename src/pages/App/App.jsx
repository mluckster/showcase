import './App.css';
import Navbar from '../../components/Navbar/Navbar'
import { useState } from 'react';
import Main from '../Main/Main'
import About from '../About/About'

export default function App() {
    const [page, setPage] = useState(0)

    return (
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
    );
}
