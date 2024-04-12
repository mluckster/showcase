import './About.css'

export default function About() {
    return (
        <div className='about'>
            <div className="about-text">
                I'm using this showcase as a place to post weekly / bi-weekly projects to deepen my knowledge of 
                coding + software development + computer science. I will be using this as a place to post my 
                projects and keep myself accountable to make continuous progress to become an expert in the field
                and get hired.
            </div>

            <ul className="about-list">
                <li>Some ideas planned for the future:</li>
                <li>Exercise Routine App</li>
                <li>Chrome Extension to make twitch.tv only show the people you follow who are live</li>
                <li>Chess Game</li>
                <li>Fourier Series Visualization</li>
                <li>2D javascript game</li>
            </ul>
        </div>
    );
}