import { useState } from 'react'
import './Card.css'

export default function Card ({ item, handleCardSelect, selectedCard }) {
    const [expand, setExpand] = useState(false)

    function handleClick(e) {
        console.log(selectedCard, 'selectedCard')
        // handleExpand()
        handleCardSelect(e.target.parentElement.id)
    }

    function handleExpand(e){
        setExpand(!expand)
    }

    return (
        <div onClick={handleClick} id={item.id}>
            <div className='title'>
                { item.title }
            </div>

            { selectedCard ? (
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