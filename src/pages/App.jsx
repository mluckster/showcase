import './App.css';
import Card from '../components/Card/Card'
import Navbar from '../components/Navbar/Navbar'
import { useState } from 'react';
import textData from '../data/textData.json'

export default function App() {
    const [page, setPage] = useState(0)

    return (
        <div className="App">
            <Navbar setPage = { setPage }/>
            {
            page ? 
            <>
            {/* about section */}
                <div>
                    I'm using this showcase as a place to post weekly / bi-weekly projects to deepen my knowledge of 
                    coding + software development + computer science. I will be using this as a place to post my 
                    projects and keep myself accountable to make continuous progress to become an expert in the field
                    and get hired.
                </div>

                <ul>
                    <li>Some ideas planned for the future:</li>
                    <li>Exercise Routine App</li>
                    <li>Chrome Extension to make twitch.tv only show the people you follow who are live</li>
                    <li>Chess Game</li>
                    <li>Fourier Series Visualization</li>
                    <li>2D javascript game</li>
                </ul>
            </>
            :
            <div>  
                {    
                textData.map((item, index) => (
                    <Card item={item} key={index} />
                ))
                }

            </div>
            }
        </div>
    );
}
