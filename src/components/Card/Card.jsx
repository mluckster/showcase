import { useState } from 'react'
import './Card.css'
import arrow from '../../data/arrow.png'
import GHlogo from '../../data/GHlogo.png'
import newPNG from '../../data/new.png'

export default function Card ({ item }) {
    const [expand, setExpand] = useState(false)

    function handleExpand(){
        setExpand(true)
    }

    function handleLink(url){
        window.open(url, '_blank')
    }

    function handleCollapse(e) {
        e.stopPropagation()
        setExpand(false)
    }

    // item.title.split(/\s+/)[0] returns only the first word in the title string and sets as ID
    return (
        <div onClick={handleExpand} id={ item.title.split(/\s+/)[0] } className={ `projects ${expand ? 'expanded' : ''}` }>
            <div className="top">
                <div className='title'>{ item.title }</div>
                { expand && (
                    <div onClick={handleCollapse} className='collapse'>
                        <div>show less</div>
                        <img src={arrow} alt="" />

                    </div>
                )}
            </div>
            <div className='box'>
                {
                    item.technology.map((tech, index) => (
                        <div className="tech">
                            <img key={index} src={require(`../../data/${tech}-logo.png`)} alt={tech} />
                            { tech }
                        </div>
                    ))
                }
            </div>
            <div className='description'>
                { 
                    item.description.map((paragraph, index) => (
                        <div key={index}>{ paragraph }</div>
                    ))
                }
                <div className="links">
                    <div onClick={ () => handleLink(item.ghLink) } className='external'>
                        <div>GitHub</div>
                        <img src={ GHlogo } alt="" />
                    </div>
                    <div onClick={ () => handleLink(item.liveLink) } className='external'>
                        <div>Check it out</div>
                        <img src={ newPNG } alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}