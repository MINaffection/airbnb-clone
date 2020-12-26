import React from 'react'
import '../css/Card.css'

// 여러 인자(props)로 재사용 가능하게 만든다
function Card({src, title, description, price}) {
    return (
        <div className='card'>
            <img src={src} alt="image_card" />
            <div className='card__info'>
                <h2>{title}</h2>
                <h4>{description}</h4>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default Card
