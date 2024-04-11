import { useState } from 'react'
import './Card.css'

export default function Card ({ item }) {
    const [expand, setExpand] = useState(false)

    function handleExpand(e){
        setExpand(!expand)
    }

    return (
        <div onClick={handleExpand} id={item.id} className='projects'>
            <div className='title'>
                { item.title }
            </div>

            { expand ? (
            <>
                <div className='description'>{ item.technology }</div>
                <div className='description'>{ item.description }</div>
            </>
            ) : (
            <div className='description'>{ item.technology }</div>
        )}
        </div>
    )
}