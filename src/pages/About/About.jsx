import './About.css'

export default function About() {
    return (
        <div className='about'>
            <div className="about-text">
                I'm using this site as a place to post projects to deepen my knowledge of 
                coding + software development + computer science. I will be using this as a place to post my 
                projects and keep myself accountable, make continuous progress, and become more competent with 
                software and software development. My ultimate goal is to land a job purely based on the merits of 
                my abilities rather than referrals from friends. This probably isn't the easiest way to go about things,
                but I always do better when things are more difficult.
            </div>

            <ul className="about-list">
                <div>Some ideas planned for the future:</div> <br/>
                <li>Exercise Routine App</li>
                <li>Chrome Extension to make twitch.tv only show the people you follow who are live</li>
                <li>Chess Game</li>
                <li>Fourier Series Visualization</li>
                <li>2D javascript game</li>
                <li>Maybe some kind of game??</li>
            </ul> <br/>
            <div>Contact me! - luckymichael00@gmail.com</div>
        </div>
    );
}