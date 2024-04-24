export default function Landing({ setLanding, landing }){
    function handleEnter(){
        setLanding(!landing)
    }

    return (
        <>
            <div>
                landing
            </div>
            <div className="enter" onClick={handleEnter}>enter</div>    
        </>
    )
}