import { useState } from 'react'
import './Card.css'

export default function Card ({ item }) {
    const [expand, setExpand] = useState(false)

    function handleExpand(e){
        setExpand(!expand)
    }

    return (
        <div onClick={handleExpand} id={item.id} className={ `projects ${expand ? 'expanded' : ''}` }>
            <div className='title'>
                { item.title }
            </div>
            <div className='description'>
                {
                    item.technology.map((tech, index) => (
                        <img key={index} src={require(`../../data/${tech}`)} alt={tech} />
                    ))
                }
            </div>
            <div className='description specific'>{ item.description }</div>
        </div>
    )
}