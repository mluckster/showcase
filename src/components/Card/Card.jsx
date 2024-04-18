import { useState } from 'react'
import './Card.css'

export default function Card ({ item }) {
    const [expand, setExpand] = useState(false)

    function handleExpand(e){
        setExpand(!expand)
    }

    return (
        <div onClick={handleExpand} id={item.title} className={ `projects ${expand ? 'expanded' : ''}` }>
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