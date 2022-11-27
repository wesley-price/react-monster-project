import Card from '../card/card.compoent'
import './card-list.styles.css';
import React from "react";

const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map((monster) => {
            return <Card key={monster.id} monster={monster} />;
        })}
    </div>
);

export default CardList;