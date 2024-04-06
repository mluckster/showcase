import { useState } from 'react'
import './Card.css'

export default function Card ({ item }) {
    const [expand, setExpand] = useState(false)

    function handleExpand(e){
        setExpand(!expand)
    }

    return (
        <div onClick={handleExpand}>
            <div className='title'>
                { item.title }
            </div>
            { expand ?
            <div className='description'>
                <div>{ item.technology }</div>
                <div>{ item.description }</div>
            </div>
            :
            <div>{ item.technology }</div>

        }
        </div>
    )
}