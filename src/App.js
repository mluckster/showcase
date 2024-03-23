import './App.css';
import Card from './components/Card'

export default function App() {
    return (
        <div className="App">
            <>
                < Card />
                <div>
                    I'm using this showcase as a place to post weekly / bi-weekly projects to deepen my knowledge of 
                    coding + software development + computer science. I will be using this as a place to post my 
                    projects and keep myself accountable to make continuous progress to become an expert in the field
                    and get hired.
                </div>

                <ul>
                    Some ideas planned for the future:
                    <li>Exercise Routine App</li>
                    <li>Chrome Extension to make twitch.tv only show the people you follow who are live</li>
                    <li>Chess Game</li>
                    <li>Fourier Series Visualization</li>
                    <li>2D javascript game</li>
                </ul>
            </>
        </div>
    );
}
