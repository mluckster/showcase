import './Landing.css'

export default function Landing({ setLanding, landing }){
    function handleEnter(){
        setLanding(!landing)
    }

    return (
        <>
            <div className="landing">
                <div>
                    My name is Michael Lucky
                </div>
                <div>
                    Welcome to my Project Blog
                </div>
                <div>
                    I will be making posts on this site for any new projects I create in my quest to find full time employment in the software development space. Each post will be accompanied with a small blurb based on what I learned from the development process, any challenges, what I would want to do differently, or anything else about the project building experience.
                </div>
            </div>
            <div className="enter" onClick={handleEnter}>ENTER</div>    
        </>
    )
}