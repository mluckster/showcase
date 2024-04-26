import './Landing.css'

export default function Landing({ setLanding, landing }){
    function handleEnter(){
        setLanding(!landing)
    }

    return (
        <>
            <div className="landing">
                <div>
                    Welcome to my Project Blog.
                </div>
                <div>
                    In the process of my job search, i'm planning to update here on any new things that I make. Each post will be accompanied with a small blurb based on what I learned from the development process, any challenges, what I would want to try differently, or anything along those lines.
                </div>
                <div>Enter the site to check things out!</div>
            </div>
            <div className="enter" onClick={handleEnter}>ENTER</div>    
        </>
    )
}