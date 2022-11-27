import {Component} from 'react'
import './card.styles.css'

const Card = ({monster}) => {

        const {id, email, name} = monster;
        return (
            <div className='card-container' key={id}>
                <img alt='monster ${name}'
                     src={`https://robohash.org/${id}?set=set2&size=90x90`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )
}

export default Card;