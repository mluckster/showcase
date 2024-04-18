import { useState } from 'react'
import './Card.css'

export default function Card ({ item }) {
    const [expand, setExpand] = useState(false)

    function handleExpand(e){
        setExpand(!expand)
    }


    // item.title.split(/\s+/)[0] returns only the first word in the title string and sets as ID (line 15)

    return (
        <div onClick={handleExpand} id={ item.title.split(/\s+/)[0] } className={ `projects ${expand ? 'expanded' : ''}` }>
            <div className='title'>
                { item.title }
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
            <div className='description specific'>{ item.description }</div>
        </div>
    )
}